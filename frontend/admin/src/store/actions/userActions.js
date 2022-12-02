import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = `https://api.streetrates.hng.tech/api`;

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
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(
        `${BASE_URL}/auth`,
        {
          username: payload.email,
          password: payload.password,
        },
        config
      );

      if (res.status && res.status === 200) {
        localStorage.setItem("token", res.data["access_token"]);

        return res.data;
      } else {
        return rejectWithValue(res);
      }
    } catch (err) {
      console.log(err, "error");
      localStorage.removeItem("token");
      return rejectWithValue(err.response.data);
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loginStatus = 'idle';
    }
  },
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

export const { logout } = userSlice.actions

export default userSlice.reducer;
