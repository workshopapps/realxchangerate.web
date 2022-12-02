import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    complaints: [],
    complaint: null,
    error: null,
    requestStatus: "idle",
};

const BASE_URL = `https://my-second-app-dot-wise-philosophy-348109.oa.r.appspot.com`

export const getComplaints = createAsyncThunk(
    "complaint/all",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `${BASE_URL}/api/admin/get_all_complaints`,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
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


export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComplaints.pending, (state, action) => {
                state.requestStatus = "pending";
            })
            .addCase(getComplaints.fulfilled, (state, action) => {
                state.currencies = action.payload;
                state.requestStatus = "success";
            })
            .addCase(getComplaints.rejected, (state, action) => {
                state.requestStatus = "failed";
                state.error = action.payload;
            })
    },
});

export default dashboardSlice.reducer;