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
  const [convert, setconvert] = React.useState(1000);
  const [currency, setCurrecy] = React.useState("NGN");
  const [base, setBase] = React.useState("USA");
  const [buy, setbuy] = React.useState(true);
  const [date, setDate] = React.useState("");

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
    var currentdate = new Date();
    var datetime =
      "Last Sync: " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    setDate(datetime);
    fetchRates().then((ratesData) => {
      setRates(ratesData.data.rate);
    });
  }, [base_url, endpoint, currency, date]);

  const handleSwitch = () => {
    setbuy(!buy);
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
        sx={{
          display: "flex",
          gap: "1rem",
          paddingInline: "4px",
          fontSize: "14px",
          height: "24px",
          alignItems: "center",
        }}
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
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card
      className={styles.convert}
      sx={{
        borderRadius: "1rem",
        width: { xs: "100%" },
        border: "1px solid #BBBBBB",
        padding: { lg: "32px", xs: "8px" },
        mb: "64px",
      }}
    >
      <h2
        style={{
          color: "#0F172A",
          fontSize: "clamp(20px, 5vw, 24px)",
          lineHeight: "40px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Start Conversion
      </h2>
      <Box sx={{ width: { xs: "100%" } }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            flexWrap: "no-wrap",
            width: "100%",
            // justifyContent: "space-between",
            alignItems: "center",
            gap: "26px",
          }}
        >
          {/* <Box
            ref={parent}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },

              gap: "26px",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: "1rem", lg: "1.5rem" },
            }}
          > */}
          {buy ? (
            <SelectCurrency>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flexBasis: "30%", mt: { xs: "15px", lg: "5px" } }}
              >
                <InputLabel className={styles.label}>Base Currency</InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  sx={{ mt: "6px" }}
                  value={base}
                  onChange={(e) => setBase(e.target.value)}
                >
                  {currenciesList.map((currency) => (
                    <MenuItem key={currency.isocode} value={currency.isocode}>
                      <CurrencyMenu currency={currency} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SelectCurrency>
          ) : (
            <SelectCurrency>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flexBasis: "30%", mt: { xs: "15px", lg: "5px" } }}
              >
                <InputLabel className={styles.label}>Currency</InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  sx={{ mt: "6px" }}
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
            </SelectCurrency>
          )}
          <AmountInput>
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
              sx={{
                width: "100%",
              }}
              label="Amount"
              value={convert}
              onChange={(e) => setconvert(e.target.value)}
            />
          </AmountInput>
          <Button
            onClick={handleSwitch}
            // variant="outlined"
            sx={{
              maxWidth: "30px",
              height: "50px",
              margin: "0 auto",
              flex: 2,
            }}
          >
            {matches ? (
              <HiOutlineSwitchHorizontal size="2rem" />
            ) : (
              <HiOutlineSwitchVertical size="2rem" />
            )}
          </Button>
          {buy ? (
            <SelectCurrency>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flexBasis: "30%", mt: { xs: "15px", lg: "5px" } }}
              >
                <InputLabel className={styles.label}>Currency</InputLabel>
                <Select
                  name="currency"
                  variant="outlined"
                  id="currency1"
                  sx={{ mt: "6px" }}
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
            </SelectCurrency>
          ) : (
            <SelectCurrency>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flexBasis: "30%", mt: { xs: "15px", lg: "5px" } }}
              >
                <InputLabel className={styles.label}>Base Currency</InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  value={base}
                  sx={{ mt: "6px" }}
                  onChange={(e) => setBase(e.target.value)}
                >
                  {currenciesList.map((currency) => (
                    <MenuItem key={currency.isocode} value={currency.isocode}>
                      <CurrencyMenu currency={currency} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SelectCurrency>
          )}
          {/* </Box> */}
        </Box>
      </Box>
      {convert && Object.keys(rates).length > 0 && (
        <Rate>
          <div className="convert">
            <h4>Result</h4>
            <h3>
              {buy
                ? noWCommas((rates.parallel_buy * Number(convert)).toFixed(2))
                : noWCommas(
                    ((1 / rates.parallel_sell) * Number(convert)).toFixed(2)
                  )}
              <span>{buy ? currency : "USD"}</span>
            </h3>
            <div className="xchng">
              <h4>
                1 USD = {noWCommas((rates.parallel_buy * Number(1)).toFixed(2))}
                {currency}
              </h4>
            </div>
          </div>

          <div>
            <h6>
              With Streetrates, you always obtain the best exchange rate.{" "}
            </h6>
            <p>Last updated Nov 16, 2022, 04:49 UTC</p>
          </div>
        </Rate>
      )}
    </Card>
  );
};

const Rate = styled.div`
  margin-top: 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  padding-left: 16px;
  padding-right: 80px;

  h4 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 4px;
  }
  span {
    margin-left: 6px;
  }
  .xchng h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #555962;
    margin-bottom: 4px;
    text-align: left;
    /* display: none; */
  }
  & :last-child {
    text-align: right;
    h6 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #555962;
      margin-bottom: 4px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #94a3b8;
    }
  }
  @media screen and (max-width: 720px) {
    margin-top: 24px;
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding-inline: 16px;

    & :last-child {
      text-align: center;
      margin-bottom: 8px;
    }
  }
`;

const AmountInput = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  /* height: 70px; */

  & input {
    padding: 12px 16px;
  }
  @media screen and (min-width: 768px) {
    height: 65px;
    width: 30%;
  }
  @media screen and (min-width: 1025px) {
    height: 55px;
    width: 30%;
  }
`;

const SelectCurrency = styled.div`
  /* display: none; */
  /* height: 50px; */
  width: 100%;
  #currency1 {
    padding: 4px;
  }
  & select {
    background-color: red;
    /* margin-bottom: 20px; */
    width: 100%;
    padding: 12px 16px;
    & option {
      background-color: green;
    }
  }

  @media screen and (min-width: 400px) {
    #currency1 {
      padding: 12px 16px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    #currency1 {
      padding: 12px 16px;
    }
  }
`;
export default Convert;
