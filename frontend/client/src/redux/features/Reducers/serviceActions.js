import { dispatch } from "../../store";
import {
  setCurrencyList,
  setUserIp,
  setLoading,
  setCountryDetails,
  setDefaultCurrency,
  setCurrencyData,
  setCurrencyRates,
} from "./servicesReducer";
import axios from "axios";
import RateService from "../Utils/Axios/apis";
import { countries } from "../../../utils/data";

export const GetUserIp = () => async () => {
  try {
    const res = await axios.get("https://api.ipify.org");

    sessionStorage.setItem("ip", res.data);
    dispatch(GetDefaultCurrency(res.data));
    dispatch(setUserIp(res.data));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const GetDefaultCurrency = (ip) => async () => {
  try {
    const res = await RateService.GetCurrencyByIP(ip);
    const country = res.data.data.currency.country;
    const defaultCurrency = countries.find((x) => x.label === country);

    sessionStorage.setItem("localCurrency", JSON.stringify(defaultCurrency));
    dispatch(setDefaultCurrency(defaultCurrency));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const GetCurrencies = () => async () => {
  try {
    const res = await RateService.GetCurrencies();
    let currencies = res.data.currencies;
    const countryDetails = [];
    currencies.forEach((ele) => {
      countryDetails.push(countries.find((x) => x.label === ele.country));
    });
    dispatch(setCurrencyList(currencies));
    dispatch(setCountryDetails(countryDetails));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const GetCurrencyData = (isocode) => async () => {
  try {
    const res = await RateService.GetCurrencyData(isocode);
    dispatch(setCurrencyData(res.data.data));
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const GetCurrencyRates = (currencies) => async () => {
  try {
    let currencyRates = currencies.map(async (ele) => {
        const res = await RateService.GetCurrencyData(ele.isocode);
        return res.data.data
    })
    Promise.all(currencyRates).then((values) => dispatch(setCurrencyRates(values)))
   
    dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};
