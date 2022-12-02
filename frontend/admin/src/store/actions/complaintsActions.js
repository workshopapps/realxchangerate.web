import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    complaints: null,
    complaint: null,
    error: null,
    loading: 'idle',
};

// const BASE_URL = `https://my-second-app-dot-wise-philosophy-348109.oa.r.appspot.com`

export const getComplaints = createAsyncThunk(
    "complaint/all",
    async (_, { rejectWithValue }) => {

        const token = localStorage.getItem("token");

        try {
            const res = await axios.get(
                `https://my-second-app-dot-wise-philosophy-348109.oa.r.appspot.com/api/admin/get_all_complaints`,
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.status && res.status === 200) {
                return res.data;
            } else {
                return rejectWithValue(res);
            }
        } catch (err) {
            console.log(err.message, "erorr");
            return rejectWithValue(err.response.data);
        }
    }
);


export const complaintsSlice = createSlice({
    name: "complaints",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComplaints.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(getComplaints.fulfilled, (state, action) => {
                state.complaints = action.payload;
                state.loading = 'success';
            })
            .addCase(getComplaints.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = 'failed';
            })
    },
});

export default complaintsSlice.reducer;