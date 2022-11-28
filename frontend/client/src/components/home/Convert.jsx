import React from "react";
import styled from "styled-components";
import { noWCommas } from "../../utils";
import styles from "./home.module.css";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { currenciesList, countries } from "../../Pages/Home/data";
import autoAnimate from "@formkit/auto-animate";

const Convert = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const localBase = "http://localhost:8000/api";
  const [rates, setRates] = React.useState({});
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

  const handleSwitch = () => {
    setbuy((value) => {
      return !value;
    });
  };

  const parent = React.useRef(null);
  React.useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const CurrencyMenu = (props) => {
    const { currency } = props;
    const countryDetails = countries.filter(
      (countr) => countr.label === currency.country
    );
    return (
      <MenuItem
        key={currency.isocode}
        value={currency.isocode}
        sx={{ display: "flex", gap: "1rem" }}
      >
        <Box>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${countryDetails[0].code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${countryDetails[0].code.toLowerCase()}.png 2x`}
            alt=""
          />
        </Box>
        <Box>{currency.country}</Box>
        <Box>({currency.isocode})</Box>
      </MenuItem>
    );
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Card
      className={styles.convert}
      sx={{
        borderRadius: "1rem",
        width: { xs: "100%", md: "50%" },
        border: "1px solid #BBBBBB",
      }}
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
            variant="outlined"
            type="number"
            name="amount"
            label="Amount"
            value={convert}
            onChange={(e) => setconvert(e.target.value)}
          />
          <Box
            ref={parent}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "1.5rem",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: "1rem", lg: "1.5rem" },
            }}
          >
            {buy ? (
              <TextField
                sx={{
                  flex: 2,
                  bgcolor: "#B0CEFF",
                  borderRadius: "1rem",
                  border: "none",
                }}
                variant="filled"
                id="outlined-read-only-input"
                label="Base Currency"
                defaultValue="USD"
                InputProps={{
                  readOnly: true,
                }}
              />
            ) : (
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flex: 2, mt: { xs: "15px", lg: "5px" } }}
              >
                <InputLabel className={styles.label}>
                  Select Currency
                </InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  value={currency}
                  onChange={(e) => setCurrecy(e.target.value)}
                >
                  {currenciesList.map((currency) => (
                    <MenuItem key={currency.isocode} value={currency.isocode}>
                      <CurrencyMenu currency={currency} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <Button
              onClick={handleSwitch}
              variant="outlined"
              sx={{
                maxWidth: "30px",
                height: "50px",
                margin: "0 auto",
                flex: 2,
              }}
            >
              {matches ? (
                <HiOutlineSwitchHorizontal size="1.7rem" />
              ) : (
                <HiOutlineSwitchVertical size="1.7rem" />
              )}
            </Button>
            {buy ? (
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flex: 2, mt: { xs: "15px", lg: "5px" } }}
              >
                <InputLabel className={styles.label}>
                  Select Currency
                </InputLabel>
                <Select
                  name="currency"
                  variant="outlined"
                  id="currency1"
                  value={currency}
                  onChange={(e) => setCurrecy(e.target.value)}
                >
                  {currenciesList.map((currency) => (
                    <MenuItem key={currency.isocode} value={currency.isocode}>
                      <CurrencyMenu currency={currency} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                sx={{
                  bgcolor: "#B0CEFF",
                  borderRadius: "1rem",
                  border: "none",
                  flex: 2,
                }}
                variant="filled"
                id="outlined-read-only-input"
                label="Base Currency"
                defaultValue="USD"
                InputProps={{
                  readOnly: true,
                }}
              />
            )}
          </Box>
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
