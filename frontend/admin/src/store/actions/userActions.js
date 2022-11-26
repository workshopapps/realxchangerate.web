import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  error: null,
  registerStatus: "idle",
  loginStatus: "idle",
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post("", {
        email: payload.email,
        password: payload.password,
      });
      if (res.status && res.status === 200) {
        localStorage.setItem("token", res.data["access_token"]);
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "success";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
