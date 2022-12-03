import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import Convert from "../../components/home/Convert";
import Hero from "../../components/home/Hero";
// import Table from "./components/Table";
import Table2 from "./components/Table2";
import { tableCurrenciesList, addCurrency } from "./data";
import styled from "styled-components";
import add from "./assets/add.svg";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import DeleteIcon from "./assets/delete.svg";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { GetCurrencyRates } from "../../redux/features/Reducers/serviceActions";
import { countries } from "./data";
import Countdown from "react-countdown-simple";
const Home = () => {
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 2)
  ).toISOString();
  const { currencyRates, currencyList } = useSelector((state) => state.service);
  // const progressUpdate = document.getElementById("time").innerText;
  const [currencies, setCurrencies] = useState(tableCurrenciesList);
  const [getCurrency, setGetCurrency] = useState([]);
  const [dateUpdate, setDateUpdate] = useState("");
  const handleEdit = () => {
    toggle();
  };
  useEffect(() => {
    if (currencyList.length > 0) {
      dispatch(GetCurrencyRates(currencyList));
    }

    fetch("https://api.streetrates.hng.tech/api/currency/currencies/flags")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGetCurrency(data);
        setDateUpdate(data[0].rate.last_updated);
      })
      .catch((e) => console.log(e));

    //eslint-disable-next-line
  }, [currencyList]);
  const handleDelete = (e) => {
    setCurrencies(currencies.filter((item) => item.id !== e));
  };
  function toggle() {
    const button = document.getElementById("edit");
    const deleteIcons = document.querySelectorAll(".delete-cur");

    if (button.innerHTML === "Done") {
      button.innerHTML = "Edit";
      deleteIcons.forEach((e) => (e.style.display = "none"));
    } else {
      button.innerHTML = "Done";
      deleteIcons.forEach((e) => (e.style.display = "block"));
    }
  }

  const handleAdd = (closeModal, item) => {
    setCurrencies([...currencies, item]);
    closeModal();
  };
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: { sx: "column", md: "row" },
        flexDirection: "column",
        gap: "4rem",
        maxWidth: "1440px",
        margin: "auto",
        p: { xs: "1.5rem", md: "4rem", lg: "5rem 10rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          flexDirection: { sm: "column", xs: "column-reverse" },

          gap: "2.4rem",
        }}
      >
        <Hero />
        <Convert />
      </Box>
      <StyledBox>
        <TypographyLive
          sx={{ color: "#0062FF", fontSize: "16px", fontWeight: 500 }}
        >
          LIVE RATES
        </TypographyLive>
        <TypographyHead
          component="h2"
          sx={{ fontSize: "32px", maxWidth: "595px", fontWeight: 800 }}
        >
          Live rates of every currency around the world
        </TypographyHead>
        <StyledEdit className="action" id="edit" onClick={() => handleEdit()}>
          Edit
        </StyledEdit>
      </StyledBox>
      {/* Table  */}
      <List
        style={{
          border: "1px solid #CBD5E1",
          padding: "0",
          borderRadius: "5px",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#F1F5F9",
            fontSize: "1.7rem",
            p: "1.5rem",
            fontWeight: 600,
            color: "black",
          }}
        >
          <Box>Currency</Box>
          <Box>Parallel </Box>
          <StyledBankBox>Bank </StyledBankBox>
          <Box></Box>
        </ListItem>

        {currencies.map((currency) => {
          return (
            <>
              {currencyRates.length > 0 && (
                <Table2
                  isocode={currency.isocode}
                  country={currency.country}
                  key={currency.id}
                  rates={
                    currencyRates.find(
                      (x) => x.currency.isocode === currency.isocode
                    ).rate
                  }
                  link={currency.link}
                  symbol={currency.symbol}
                  flag={currency.flag}
                  deleteIcon={
                    <img
                      src={DeleteIcon}
                      className="delete-cur"
                      alt=""
                      style={{ display: "none" }}
                      onClick={(e) => handleDelete(currency.id)}
                    />
                  }
                />
              )}
            </>
          );
        })}
      </List>
      <StyledSelection>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button {...bindTrigger(popupState)}>
                <div className="add">
                  <img src={add} alt="" />
                  <span className="addspan">Add currency</span>
                </div>
              </Button>
              <Menu {...bindMenu(popupState)}>
                {getCurrency.map((item) => {
                  return (
                    <MenuItem
                      onClick={() => handleAdd(popupState.close, item)}
                      key={item.id}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`${item.flag}`}
                        alt=""
                        style={{ marginRight: "10px" }}
                      />
                      {item.isocode} - {item.country}
                    </MenuItem>
                  );
                })}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <div className="lastUpdate">
          <div style={{ position: "relative" }}>
            <CircularProgressWithLabel
              variant="determinate"
              value={59}
              thickness={6}
            />
            <i>
              <Countdown
                targetDate={oneHour}
                renderer={({ days, hours, minutes, seconds }) => (
                  <span id="time">{minutes}</span>
                )}
              />
            </i>
          </div>
          <span>Last updated {dateUpdate}</span>
        </div>
      </StyledSelection>
    </Box>
  );
};

export default Home;
const TypographyLive = styled(Typography)`
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

const TypographyHead = styled(Typography)`
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
const StyledBox = styled(Box)``;

const StyledBankBox = styled(Box)`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const StyledEdit = styled.button`
  border: 1px solid #0062ff;
  border-radius: 8px;
  background: none;
  padding: 10px 22px;
  gap: 12px;

  width: 180px;
  height: 42px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #0062ff;
  margin-top: 26px;
  float: right;
`;

const StyledSelection = styled.div`
  display: flex;
  justify-content: space-between;
  .add {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .addspan {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #0062ff;
    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
  .lastUpdate {
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 480px) {
      max-width: 50%;
    }
    i span {
      position: absolute;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      right: 18px;
      top: 9px;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      @media screen and (max-width: 480px) {
        font-size: 10px;
      }
    }
  }
`;
