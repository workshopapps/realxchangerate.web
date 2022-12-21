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
        "https://api.streetrates.info//api/currency/"
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

export const addCurrency = createAsyncThunk(
  "currency/add",
  async (payload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://api.streetrates.info//api/admin/add_currency/",
        {
          country: payload.country,
          isocode: payload.isocode,
          symbol: payload.symbol,
          rate: payload.rate,
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
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

export const editCurrency = createAsyncThunk(
  "currency/edit",
  async (payload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://api.streetrates.info//api/admin/update_currency/${payload.isocode}?iso_code=${payload.isocode}`,

        {
          country: payload.country,
          isocode: payload.isocode,
          symbol: payload.symbol,
          name: payload.name,
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
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
      })
      .addCase(editCurrency.pending, (state, action) => {
        state.requestStatus = "pending";
      })
      .addCase(editCurrency.fulfilled, (state, action) => {
        state.requestStatus = "success";
        state.message = action.payload;
      })
      .addCase(editCurrency.rejected, (state, action) => {
        state.requestStatus = "failed";
        state.message = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
