import React from "react";
import { Container, Typography, Grid, List, ListItem } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Button, StyledSelection } from "./CurrencyProfile.styles";
import chart from "./assets/chart.png";
import flag from "./assets/flag.png";
import mobile from "./assets/mobile.png";
import { currenciesList, countries } from "../../utils/data";
import Table2 from "../Home/components/Table2";
import CircularProgressWithLabel from "@mui/material/CircularProgress";
import DeleteIcon from "./assets/delete.svg";
import { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import Countdown from "react-countdown-simple";
import { GetCurrencyRates } from "../../redux/features/Reducers/serviceActions";
import { tableCurrenciesList } from "../Home/data";
import { AddCircle } from "iconsax-react";
import Chart from "./chart/Chart";
import DataCards from "./datacards/DataCards";
import dayjs from "dayjs";
import Liverates from "../Home/Liverates";
//
//
const CurrencyProfile = () => {
  //
  const [currency, setCurrency] = React.useState("NGN");
  //
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 2)
  ).toISOString();
  const { currencyRates, currencyList } = useSelector((state) => state.service);
  // const progressUpdate = document.getElementById("time").innerText;
  const [currencies, setCurrencies] = useState(tableCurrenciesList);
  const [getCurrency, setGetCurrency] = useState([]);
  const [dateUpdate, setDateUpdate] = useState("");
  //
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
  //

  //
  // const CurrencyMenu = (props) => {
  //   const { currency } = props;
  //   const countryDetails = countries.filter(
  //     (countr) => countr.label === currency.country
  //   );
  //   return (
  //     <MenuItem
  //       key={currency.isocode}
  //       value={currency.isocode}
  //       sx={{ display: "flex", gap: "1rem" }}
  //     >
  //       <Box>
  //         <img
  //           loading="lazy"
  //           width="20"
  //           src={`https://flagcdn.com/w20/${countryDetails[0].code.toLowerCase()}.png`}
  //           srcSet={`https://flagcdn.com/w40/${countryDetails[0].code.toLowerCase()}.png 2x`}
  //           alt=""
  //         />
  //       </Box>
  //       <Box>{currency.country}</Box>
  //       <Box>({currency.isocode})</Box>
  //     </MenuItem>
  //   );
  // };
  //
  //
  return (
    <Container
      style={{
        maxWidth: "1440px",
        display: "flex",
        gap: "30px",
        maxWidth: "1440px",
        flexDirection: "column",
      }}
      sx={{
        paddingLeft: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
        paddingRight: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
      }}
    >
      <Box>
        <Chart />
      </Box>

      <DataCards />

      <Liverates />
    </Container>
  );
};

export default CurrencyProfile;
