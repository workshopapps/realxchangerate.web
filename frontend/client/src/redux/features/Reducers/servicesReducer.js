import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 userIp: "",
 defaultCurrency: null,
 currencyList : [],
 currencyRates:[],
 countryDetails : [],
 isLoading:false,
 currencyData: null
};



const ServiceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setUserIp: (state, action) => {
      state.userIp = action.payload
    },
    setDefaultCurrency: (state, action) => {
      state.defaultCurrency = action.payload
    },
    setCurrencyData: (state, action) => {
      state.currencyData = action.payload
    },

    setCurrencyList : (state, action) => {
      state.currencyList = action.payload
    },  
    setCountryDetails : (state, action) => {
      state.countryDetails = action.payload
    },
    setCurrencyRates: (state, action) => {
      state.currencyRates = action.payload
    },
  }
});

export const {
 setUserIp, setCurrencyList, setLoading, setCountryDetails, setDefaultCurrency, setCurrencyData, setCurrencyRates
} = ServiceSlice.actions;

export default ServiceSlice.reducer;
