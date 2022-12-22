import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./home.module.css";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import autoAnimate from "@formkit/auto-animate";
import { useSelector } from "react-redux";
import { setDefaultCurrency } from "../../redux/features/Reducers/servicesReducer";
import { dispatch } from "../../redux/store";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

const Convert = () => {
  const { currencyList, countryDetails, defaultCurrency } = useSelector(
    (state) => state.service
  );

  // Adding translation
  const { t } = useTranslation();
  const base_url = process.env.REACT_APP_BASE_URL;
  const localBase = "http://localhost:8000/api";
  const [rates, setRates] = useState({});
  const [convert, setconvert] = useState(1);
  const [currency, setCurrency] = useState("NGN");
  const [base, setBase] = useState("USD");
  const [buy, setBuy] = useState(true);
  const [date, setDate] = useState("Loading ..");
  const [rate, setRate] = useState("loading ..");
  const gaEventTracker = useAnalyticsEventTracker("Contact us");

  const endpoint =
    process.env.NODE_ENV === "development"
      ? `${localBase}/rate/${currency}`
      : process.env.NODE_ENV === "production"
      ? `${base_url}/rate/${currency}`
      : "";

  React.useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(
        `${base_url}/rate/convert/calc?from_currency=${base}&to_currency=${currency}&amount=${convert}`
      );
      const data = await response.json();
      return data;
    };
    const fetchRate = async () => {
      const response = await fetch(
        `${base_url}/rate/convert/calc?from_currency=${base}&to_currency=${currency}&amount=${1}`
      );
      const data = await response.json();
      return data;
    };
    const fetchDate = async () => {
      const response = await fetch(`${base_url}/rate/last_rate_update`);
      const data = await response.json();

      return data;
    };

    fetchRates().then((ratesData) => {
      setRates(ratesData.data.parallel_total);
    });
    fetchRate().then((ratesData) => {
      setRate(ratesData.data.parallel_total);
    });
    fetchDate()
      .then((UpdateDate) => {
        setDate(Date(UpdateDate.Time));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [base_url, endpoint, currency, date, base, convert]);

  const handleSwitch = () => {
    setBase(currency);
    setCurrency(base);
    setBuy(!buy);
  };

  useEffect(() => {
    const DefaultCurrency = JSON.parse(
      sessionStorage.getItem("defaultCurrency")
    );
    if (DefaultCurrency) {
      dispatch(setDefaultCurrency(DefaultCurrency));
    }
  }, []);

  useEffect(() => {
    const DefaultCountry = currencyList.find(
      (x) => x.country === defaultCurrency?.label
    );

    const DefaultIsocode = DefaultCountry ? DefaultCountry.isocode : "USD";
    setCurrency(DefaultIsocode);
  }, [defaultCurrency, currencyList]);

  const parent = React.useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const CurrencyMenu = (props) => {
    const { currency } = props;
    const details = countryDetails.filter(
      (countr) => countr?.label === currency.country
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
            src={`https://flagcdn.com/w20/${details[0]?.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${details[0]?.code.toLowerCase()}.png 2x`}
            alt=""
          />
        </Box>
        <Box>{currency.country}</Box>
        <Box>({currency.isocode})</Box>
      </MenuItem>
    );
  };

  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const handleOnChangeConvert = (e) => {
    setconvert(e.target.value);
    gaEventTracker("convert");
  };
  const handleOnChangeBase = (e) => {
    setBase(e.target.value);
    gaEventTracker("convert");
  };

  return (
    <Card
      elevation={4}
      className={styles.convert}
      sx={{
        borderRadius: "1rem",
        width: { xs: "100%" },
        // border: "1px solid #BBBBBB",
        padding: { lg: "32px", xs: "8px" },
        // boxShadow: "0 0 0 0",
        backgroundColor: dark ? "#000A1B" : "",
        mb: "6rem",
      }}
    >
      <h2
        style={{
          color: dark ? "#FAFAFA" : "#0F172A",
          fontSize: "clamp(20px, 5vw, 24px)",
          lineHeight: "40px",
          textAlign: "center",
          marginBottom: "1.1rem",
        }}
      >
        {t("convert_title")}
      </h2>
      <Box sx={{ width: { xs: "100%" } }}>
        <Box
          component="form"
          ref={parent}
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            flexWrap: "no-wrap",
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <AmountInput>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel
                htmlFor="amount"
                sx={{
                  color: dark ? "#8C9FBC" : "#0F172A",
                  top: "-12px !important",
                }}
              >
                {t("convert_amount")}
              </InputLabel>
              <OutlinedInput
                placeholder="enter amount"
                id="amount"
                type="number"
                name="amount"
                value={convert}
                onChange={(e) => handleOnChangeConvert(e)}
              />
            </FormControl>
          </AmountInput>
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
          {/* <div ref={parent}> */}
          {buy ? (
            <SelectCurrency>
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ flexBasis: "30%", mt: { xs: "10px", lg: "5px" } }}
              >
                <InputLabel
                  sx={{ color: dark ? "#8C9FBC" : "#0F172A" }}
                  className={styles.label}
                >
                  {t("convert_from")}
                </InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  sx={{ mt: "6px" }}
                  value={base}
                  onChange={(e) => handleOnChangeBase(e)}
                >
                  {currencyList.map((currency) => (
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
                <InputLabel
                  sx={{ color: dark ? "#8C9FBC" : "#0F172A" }}
                  className={styles.label}
                >
                  From:
                </InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  sx={{ mt: "6px" }}
                  value={base}
                  onChange={(e) => handleOnChangeBase(e)}
                >
                  {currencyList.map((currency) => (
                    <MenuItem key={currency.isocode} value={currency.isocode}>
                      <CurrencyMenu currency={currency} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SelectCurrency>
          )}

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
                <InputLabel
                  sx={{ color: dark ? "#8C9FBC" : "#0F172A" }}
                  className={styles.label}
                >
                  {t("convert_to")}
                </InputLabel>
                <Select
                  name="currency"
                  variant="outlined"
                  id="currency1"
                  sx={{ mt: "6px" }}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {currencyList.map((currency) => (
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
                <InputLabel
                  sx={{ color: dark ? "#8C9FBC" : "#0F172A" }}
                  className={styles.label}
                >
                  {t("convert_to")}
                </InputLabel>
                <Select
                  name="currency"
                  id="currency1"
                  value={currency}
                  sx={{ mt: "6px" }}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {currencyList.map((currency) => (
                    <MenuItem key={currency.isocode} value={currency.isocode}>
                      <CurrencyMenu currency={currency} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </SelectCurrency>
          )}
          {/* </div> */}

          {/* </Box> */}
        </Box>
      </Box>
      {convert && Object.keys(rates).length > 0 && (
        <Rate>
          <div className="convert">
            <h4>{t("convert_result")}</h4>
            <h3>
              {rates}
              <span>{currency}</span>
            </h3>
            <div className="xchng">
              <h4 style={{ color: dark ? "#f0f0f0" : "" }}>
                1 {base} = {rate}
                {currency}
              </h4>
            </div>
          </div>
          <div>
            <h6 style={{ color: dark ? "#f0f0f0" : "" }}>
              {t("convert_street")}
            </h6>
            <p>
              {t("convert_last")} {date}
            </p>
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
  padding: 0 1rem;
  /* padding-right: 80px; */
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
  margin-top: 20px;
  /* height: 70px; */
  & input {
    height: 1.45rem;
    padding: 12px 16;
  }
  /* @media screen and (min-width: 768px) {
    margin-top: 0px;
    height: 65px;
    width: 30%;
  } */
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
    padding-top: 0px;
    padding-bottom: 0px;
    padding-inline: 6px;
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
  @media screen and (min-width: 480px) {
    #currency1 {
      padding: 12px 16px;
    }
  }
  @media screen and (min-width: 1025px) {
    width: 30%;
    #currency1 {
      padding: 12px 16px;
    }
  }
`;
export default Convert;
