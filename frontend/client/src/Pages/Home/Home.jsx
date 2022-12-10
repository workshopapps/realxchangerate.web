import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import React from "react";
import Convert from "../../components/home/Convert";
import Hero from "../../components/home/Hero";
import { useTranslation } from "react-i18next";
// import Table from "./components/Table";
import Table2 from "./components/Table2";
import { tableCurrenciesList } from "./data";
import styled from "styled-components";
import add from "./assets/add.svg";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import DeleteIcon from "./assets/delete.svg";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { GetCurrencyRates } from "../../redux/features/Reducers/serviceActions";
import Countdown from "react-countdown-simple";
import Download from "../About/components/Download";
import { Link } from "react-router-dom";
const Home = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 2)
  ).toISOString();
  const { currencyRates, currencyList } = useSelector((state) => state.service);
  // const progressUpdate = document.getElementById("time").innerText;
  const [currencies, setCurrencies] = useState(tableCurrenciesList);
  const [getCurrency, setGetCurrency] = useState([]);
  const [dateUpdate, setDateUpdate] = useState("");
  // Adding translation
  const { t } = useTranslation();

  useEffect(() => {
    if (currencyList.length > 0) {
      dispatch(GetCurrencyRates(currencyList));
    }

    fetch("https://api.streetrates.hng.tech/api/currency/currencies/flags")
      .then((response) => response.json())
      .then((data) => {
        setGetCurrency(data);
        setDateUpdate(data[0].rate.last_updated);
      })
      .catch((e) => console.log(e));

    //eslint-disable-next-line
  }, [currencyList]);

  const handleEdit = () => {
    toggle();
  };
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
    <>
      <Box
        sx={{
          display: "flex",
          // flexDirection: { sx: "column", md: "row" },
          flexDirection: "column",
          gap: "4rem",
          maxWidth: "1440px",
          margin: "auto",
          p: { xs: "2rem", md: "4rem", lg: "5rem 10rem" },
          pt: { xs: "5rem" },
          backgroundColor: dark ? "#00050c" : "",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",

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
            {t("home_live")}
          </TypographyLive>
          <TypographyHead
            component="h2"
            sx={{ fontSize: "32px", maxWidth: "595px", fontWeight: 800 }}
          >
            {t("home_title")}
          </TypographyHead>
          <StyledEdit className="action" id="edit" onClick={() => handleEdit()}>
            {t("home_btn")}
          </StyledEdit>
        </StyledBox>
        {/* Table  */}
        <List
          style={{
            border: dark ? "" : "1px solid #CBD5E1",
            padding: "0",
            borderRadius: "5px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: dark ? "" : "#F1F5F9",
              fontSize: "1.7rem",
              p: "1.5rem",
              fontWeight: 600,
              color: dark ? "#FAFAFA" : "black",
            }}
          >
            <Box style={{ width: "107px" }}>{t("home_currency")}</Box>
            <Box style={{ width: "107px" }}>{t("home_parallel")}</Box>
            <StyledBankBox>{t("home_Bank")}</StyledBankBox>
            <Box style={{ width: "130px" }}></Box>
          </ListItem>

          {currencies.map((currency) => {
            return (
              <>
                {currencyRates.length > 0 && (
                  <Table2
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
                    isocode={currency.isocode}
                    deleteIcon={
                      <img
                        src={DeleteIcon}
                        className="delete-cur"
                        alt=""
                        onClick={() => handleDelete}
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
                    <span className="addspan">{t("home_add")}</span>
                  </div>
                </Button>
                <Menu {...bindMenu(popupState)}>
                  {getCurrency.map((item) => {
                    return (
                      <MenuItem
                        onClick={() => handleAdd(popupState.close, item)}
                        key={item.id}
                        sx={{
                          backgroundColor: dark ? "#001E4E" : "",
                          padding: "3",
                        }}
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
        </StyledSelection>
      </Box>
      <Download />
    </>
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
