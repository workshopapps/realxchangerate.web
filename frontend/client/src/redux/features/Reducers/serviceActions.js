import { dispatch } from "../../store";
import uuid from "react-uuid";
import {
  setCurrencyList,
  setUserIp,
  setLoading,
  setCountryDetails,
  setDefaultCurrency,
  setCurrencyData,
  setCurrencyRates,
  setNews,
  setNavLoading,
  createResponse,
} from "./servicesReducer";
import axios from "axios";
import RateService from "../Utils/Axios/apis";
import { countries } from "../../../utils/data";
import { ErrorHandler } from "../../../utils/ErrorHandler";

export const GetUserIp = () => async () => {
  try {
    const res = await axios.get("https://api.ipify.org");
    sessionStorage.setItem("ip", res.data);
    dispatch(GetDefaultCurrency(res.data));
    dispatch(setUserIp(res.data));
  } catch (err) {
    dispatch(setNavLoading(false));
    dispatch(createResponse(ErrorHandler(err)));
  }
};
export const GetDefaultCurrency = (ip) => async () => {
  try {
    const res = await RateService.GetCurrencyByIP(ip);
    const country = res.data.data.currency.country;
    const defaultCurrency = countries.find((x) => x.label === country);
    sessionStorage.setItem("localCurrency", JSON.stringify(defaultCurrency));
    dispatch(setDefaultCurrency(defaultCurrency));
    dispatch(setNavLoading(false));
  } catch (err) {
    dispatch(setNavLoading(false));
    dispatch(createResponse(ErrorHandler(err)));
  }
};
export const GetCurrencies = () => async () => {
  try {
    const res = await RateService.GetCurrencies();
    let currencies = res.data.currencies;
    const countryDetails = currencies.map((ele) => {
      let country = countries.find((x) => x.label === ele.country);
      return country;
    });
    dispatch(setCurrencyList(currencies));
    dispatch(setCountryDetails(countryDetails));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(createResponse(ErrorHandler(err)));
  }
};

export const GetCurrencyData = (isocode) => async () => {
  try {
    const res = await RateService.GetCurrencyData(isocode);
    dispatch(setCurrencyData(res.data.data));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(createResponse(ErrorHandler(err)));
  }
};

export const GetCurrencyRates = (currencies) => async () => {
  dispatch(setLoading(true));
  try {
    let currencyRates = currencies.map(async (ele) => {
      const res = await RateService.GetCurrencyData(ele.isocode);
      return res.data.data;
    });
    Promise.all(currencyRates).then((values) =>
      dispatch(setCurrencyRates(values))
    );

    dispatch(setLoading(false));
  } catch (err) {
    dispatch(createResponse(ErrorHandler(err)));
    dispatch(setLoading(false));
  }
};

export const GetNews = (ip) => async () => {
  try {
    dispatch(setLoading(true));
    const res = await RateService.GetNews(ip)
    if (res.data.results.length > 0) {
      //add IDs to the news
      let news = res.data.results;
      let updatedNews = news.map((ele) => {
        ele.id = uuid();
        return ele;
      });

      let lastUpdated = new Date().getTime() + 6 * 60 * 60 * 1000;
      sessionStorage.setItem("news", JSON.stringify(updatedNews));
      sessionStorage.setItem("lastUpdated", lastUpdated);
      dispatch(setNews(updatedNews));
    }

    dispatch(setLoading(false));
  } catch (err) {
    dispatch(createResponse(ErrorHandler(err)));
    dispatch(setLoading(false));
  }
};
