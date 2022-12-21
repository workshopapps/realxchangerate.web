import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  baseCurrency: "NGN",
  baseCurrencyDetails: [],
  currencyRates: [],
  error: null,
  currencyStatus: "idle",
};
const endpoint = `https://api.streetrates.info/api`;

export const getCurrencies = async () => {
  try {
    const res = await axios.get(
      "https://api.streetrates.info/api/currency/"
    );
    if (res.status && res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err, "error");
  }
};
export const getRates = createAsyncThunk(
  "rates/getRates",
  async (baseCurrency, { rejectWithValue }) => {
    try {
      const currencies = await getCurrencies();

      const currRates = await currencies.map(async (curr) => {
        const response = await axios.get(
          `${endpoint}/rate/convert/calc?from_currency=${baseCurrency}&to_currency=${curr.isocode}&amount=1`
        );
        if (response && response.status === 200) {
          // console.log(response.data);

          return await response.data;
        }
      });
      const val = await Promise.allSettled(currRates);

      return val;
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
