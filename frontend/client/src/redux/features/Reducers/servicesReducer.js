import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 userIp: "",
 currencyList : [],
 isLoading:false
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
    setCurrencyList : (state, action) => {
      state.currencyList = action.payload
    }
  }
});

export const {
 setUserIp, setCurrencyList, setLoading
} = ServiceSlice.actions;

export default ServiceSlice.reducer;
