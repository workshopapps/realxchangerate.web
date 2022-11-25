import React from "react";
import styled from "styled-components";
import { noWCommas } from "../../utils";
import styles from "./home.module.scss";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { currenciesList } from "../../Pages/Home/data";
console.table(currenciesList);
const Convert = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const localBase = "http://localhost:8000/api";
  const [rates, setRates] = React.useState({});
  const [currencies, setCurrencies] = React.useState([]);
  const [convert, setconvert] = React.useState(1);
  const [currency, setCurrecy] = React.useState("NGN");
  const [buy, setbuy] = React.useState(true);
  const endpoint =
    process.env.NODE_ENV === "development"
      ? `${localBase}/rate/${currency}`
      : process.env.NODE_ENV === "production"
      ? `${base_url}/rate/${currency}`
      : "";
  React.useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(`${base_url}/rate/${currency}`);
      const data = await response.json();
      return data;
    };
    fetchRates().then((ratesData) => {
      setRates(ratesData.data.rate);
    });
  }, [base_url, endpoint, currency]);

  // fetch all currencies
  React.useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(
        "https://exchange.hng.tech/backend/api/currency/?skip=0&limit=100"
      );
      const data = await response.json();
      return data;
    };
    fetchCurrencies().then((currenciesData) => {
      setCurrencies(currenciesData.currencies);
    });
  }, []);
  // console.table(currencies[0]);

  const handleSwitch = () => {
    setbuy((value) => {
      return !value;
    });
  };

  return (
    <Card
      className={styles.convert}
      sx={{ borderRadius: "1rem", width: { xs: "100%", md: "50%" } }}
    >
      <Box sx={{ width: { xs: "100%" } }}>
        {convert && Object.keys(rates).length > 0 && (
          <Rate className="rate">
            <div>
              At the the parallel market,{" "}
              <span className="convert"> {convert} </span>{" "}
              {buy ? "USD" : currency} is
            </div>
            <div>
              {" "}
              <span className="rate">
                {" "}
                {buy
                  ? noWCommas((rates.parallel_buy * Number(convert)).toFixed(2))
                  : noWCommas(
                      ((1 / rates.parallel_sell) * Number(convert)).toFixed(2)
                    )}
              </span>{" "}
              <span> {buy ? currency : "USD"}</span>
            </div>
          </Rate>
        )}
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          <TextField
            InputLabelProps={{
              shrink: true,
              inputMode: "numeric",
              // pattern: "[0-9]*",
            }}
            placeholder="enter amount"
            variant="standard"
            type="number"
            name="amount"
            label="Amount"
            value={convert}
            onChange={(e) => setconvert(e.target.value)}
          />
          {buy ? (
            <TextField
              id="outlined-read-only-input"
              label="Base Currency"
              defaultValue="USD"
              InputProps={{
                readOnly: true,
              }}
            />
          ) : (
            <FormControl variant="standard" fullWidth>
              <InputLabel className={styles.label}>Select Currency</InputLabel>
              <Select
                name="currency"
                id="currency1"
                value={currency}
                onChange={(e) => setCurrecy(e.target.value)}
              >
                <MenuItem value="NGN">Naira</MenuItem>
                {currenciesList.map((currency) => (
                  <MenuItem key={currency.isocode} value={currency.isocode}>
                    {currency.country} ({currency.isocode})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Button
            onClick={handleSwitch}
            variant="outlined"
            sx={{ maxWidth: "30px", height: "50px", margin: "0 auto" }}
          >
            <HiOutlineSwitchVertical size="1.7rem" />
          </Button>
          {buy ? (
            <FormControl variant="standard" fullWidth>
              <InputLabel className={styles.label}>Select Currency</InputLabel>
              <Select
                name="currency"
                id="currency1"
                value={currency}
                onChange={(e) => setCurrecy(e.target.value)}
              >
                <MenuItem value="NGN">Naira</MenuItem>
                {currenciesList.map((currency) => (
                  <MenuItem key={currency.isocode} value={currency.isocode}>
                    {currency.country} ({currency.isocode})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <TextField
              id="outlined-read-only-input"
              label="Base Currency"
              defaultValue="USD"
              InputProps={{
                readOnly: true,
              }}
            />
          )}
          {/* <Button
            className={styles.button}
            variant="contained"
            sx={{ p: 1 }}
            onClick={(e) => e.preventDefault()}
          >
            Convert
          </Button> */}
        </Box>
      </Box>
    </Card>
  );
};

const Rate = styled.div`
  width: 100%;
  word-wrap: break-word;
  font-size: 1.7rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .rate,
  .convert {
    word-wrap: break-word;
    color: #0062ff;
    font-weight: 700;
  }
  .rate {
    font-size: 4rem;
    order: 1 !important;
  }
  .convert {
    font-size: 2.5rem;
    order: 2 !important;
  }
`;

export default Convert;
