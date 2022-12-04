import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currencies: null,
  message: null,
  error: null,
  requestStatus: "idle",
};

export const getTrending = createAsyncThunk(
  "currency/trending",
  async (payload, { rejectWithValue }) => {

    const getIndividualData = async (isocode)=>{
        const option = await axios.get(`https://api.streetrates.hng.tech/api/currency/trend/${isocode}`)
        return option.data
    }

    try {
      const res = await axios.get(
        "https://api.streetrates.hng.tech/api/currency/currencies" 
      );
      
      if (res.status && res.status === 200) {
        const optionsArray = await Promise.all([...res.data.currencies].map((item) => {
            return getIndividualData(item.isocode);
          }))
          //console.log('OPTIONS', optionsArray)
    return optionsArray
    
      } else {
        return rejectWithValue(res);
      }
    } catch (err) {
      console.log(err, "erorr");
      return rejectWithValue(err.response.data);
    }
  }
);



export const trendingSlice = createSlice({
  name: "trending",
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
    
  },
});

export default trendingSlice.reducer;
