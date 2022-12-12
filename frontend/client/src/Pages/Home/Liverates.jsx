import React from "react";
import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Table from "./components/Table";
import Table2 from "./components/Table2";
import { tableCurrenciesList } from "./data";
import styled from "styled-components";
import add from "./assets/add.svg";
import DeleteIcon from "./assets/delete.png";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { GetCurrencyRates } from "../../redux/features/Reducers/serviceActions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

function Liverates() {
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
        data.sort(function (a, b) {
          const nameA = a.isocode.toUpperCase();
          const nameB = b.isocode.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        console.log(data);
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
      button.innerHTML = "Remove Currency";
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
      <StyledBox>
        <TypographyLive
          sx={{
            color: "#0062FF",
            fontSize: "1.5rem",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {t("home_live")}
        </TypographyLive>
        <TypographyHead
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, fontSize: "2.3rem", textAlign: "center" }}
        >
          {t("home_title")}
        </TypographyHead>
        {/* <StyledEdit className="action" id="edit" onClick={() => handleEdit()}>
          {t("home_btn")}
        </StyledEdit> */}
      </StyledBox>

      {/* Table  */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: dark ? "#333" : "#F1F5F9",
            }}
          >
            <TableRow>
              <TableCell style={{ fontSize: "1.7rem", fontWeight: "600" }}>
                Currency
              </TableCell>
              <TableCell style={{ fontSize: "1.7rem", fontWeight: "600" }}>
                parallel
              </TableCell>
              <TableCell style={{ fontSize: "1.7rem", fontWeight: "600" }}>
                Bank
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment>
                              <Button {...bindTrigger(popupState)}>
                                <div className="add">
                                  <img
                                    src={DeleteIcon}
                                    className="delete-cur"
                                    style={{
                                      // display: "none",
                                      width: "16px",
                                      margin: "auto",
                                      filter: dark
                                        ? "invert(100%) sepia(100%) saturate(1%) hue-rotate(228deg) brightness(102%) contrast(101%)"
                                        : "",
                                    }}
                                    alt=""
                                  />
                                </div>
                              </Button>
                              <Menu {...bindMenu(popupState)}>
                                <MenuItem
                                  onClick={(e) => handleDelete(currency.id)}
                                  style={{ color: dark ? "#fafafa" : "#333" }}
                                >
                                  Delete
                                </MenuItem>
                                <MenuItem>
                                  <Link
                                    to={`/${currency.isocode}/currency-profile`}
                                    style={{ color: dark ? "#fafafa" : "#333" }}
                                  >
                                    View currency Profile
                                  </Link>
                                </MenuItem>
                              </Menu>
                            </React.Fragment>
                          )}
                        </PopupState>
                      }
                    />
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

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
    </>
  );
}

export default Liverates;

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
const StyledBox = styled(Box)`
  width: 100%;
`;

const StyledBankBox = styled(Box)`
  /* @media screen and (max-width: 480px) {
    display: none;
  } */
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
  margin-bottom: 64px;
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
