import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userIp: "",
  defaultCurrency: null,
  currencyList: [],
  currencyRates: [],
  countryDetails: [],
  isLoading: false,
  isNavLoading : false,
  currencyData: null,
  news: [],
};

const ServiceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNavLoading: (state, action) => {
      state.isNavLoading = action.payload
    },
    setUserIp: (state, action) => {
      state.userIp = action.payload;
    },
    setDefaultCurrency: (state, action) => {
      state.defaultCurrency = action.payload;
    },
    setCurrencyData: (state, action) => {
      state.currencyData = action.payload;
    },

    setCurrencyList: (state, action) => {
      state.currencyList = action.payload;
    },
    setCountryDetails: (state, action) => {
      state.countryDetails = action.payload;
    },
    setCurrencyRates: (state, action) => {
      state.currencyRates = action.payload;
    },
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const {
  setUserIp,
  setCurrencyList,
  setLoading,
  setCountryDetails,
  setDefaultCurrency,
  setCurrencyData,
  setCurrencyRates,
  setNews,
  setNavLoading
} = ServiceSlice.actions;

export default ServiceSlice.reducer;
