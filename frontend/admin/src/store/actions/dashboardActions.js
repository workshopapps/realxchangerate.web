import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currencies: [],
  message: null,
  error: null,
  requestStatus: "idle",
};

export const getTrending = createAsyncThunk(
  "currency/trending",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://exchange.hng.tech/backend/api/currency/"
      );
      if (res.status && res.status === 200) {
        return res.data;
      } else {
        return rejectWithValue(res);
      }
    } catch (err) {
      console.log(err, "erorr");
      return rejectWithValue(err.response.data);
    }
  }
);

export const addCurrency = createAsyncThunk(
  "currency/add",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://exchange.hng.tech/backend/api/admin/add_currency/",
        {
          country: payload.country,
          isocode: payload.isocode,
          symbol: payload.symbol,
          rate: payload.rate,
        }
      );
      if (res.status && res.status === 200) {
        return res.data;
      } else {
        return rejectWithValue(res);
      }
    } catch (err) {
      console.log(err, "error");
      return rejectWithValue(err.response.data);
    }
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrending.pending, (state, action) => {
        state.requestStatus = "pending";
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.requestStatus = "success";
      })
      .addCase(getTrending.rejected, (state, action) => {
        state.requestStatus = "failed";
        state.error = action.payload;
      })
      .addCase(addCurrency.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(addCurrency.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
