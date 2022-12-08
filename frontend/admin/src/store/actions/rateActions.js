import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  baseCurrency: "NGN",
  baseCurrencyDetails: [],
  currencyRates: [],
  error: null,
  currencyStatus: "idle",
};
const endpoint = `https://api.streetrates.hng.tech/api`;

export const getRates = createAsyncThunk(
  "rates/getRates",
  async (baseCurrency, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${endpoint}/currency/currencies/${baseCurrency}`
      );
      if (response && response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.message);
    }
  }
);
export const getBaseDetails = createAsyncThunk(
  "rates/getBaseDetails",
  async (baseCurrency, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${endpoint}/currency/currency/${baseCurrency}`
      );
      if (response && response.status === 200) {
        return response.data.data;
      } else {
        rejectWithValue(response);
      }
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.message);
    }
  }
);

const rateSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBaseDetails.pending, (state) => {
        state.currencyStatus = "loading";
      })
      .addCase(getBaseDetails.fulfilled, (state, action) => {
        state.currencyStatus = "success";
        state.baseCurrency = action.payload.isocode;
        state.baseCurrencyDetails = action.payload;
      })
      .addCase(getBaseDetails.rejected, (state, action) => {
        state.error = action.payload;
        console.log("OMO: ", action.payload);
        state.currencyStatus = "failed";
      })

      .addCase(getRates.pending, (state) => {
        state.currencyStatus = "loading";
      })
      .addCase(getRates.fulfilled, (state, action) => {
        state.currencyStatus = "success";

        state.currencyRates = action.payload;
      })
      .addCase(getRates.rejected, (state, action) => {
        state.error = action.payload;

        state.currencyStatus = "failed";
      });
  },
});

export const { setBaseCurrency } = rateSlice.actions;

export default rateSlice.reducer;
