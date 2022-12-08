import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	complaints: null,
	complaint: null,
	error: null,
	loading: 'idle',
	deleteStatus: 'idle'
};

const BASE_URL = `https://api.streetrates.hng.tech/api`;

export const getComplaints = createAsyncThunk(
	'complaint/all',
	async (_, { rejectWithValue }) => {
		const token = localStorage.getItem('token');
		try {
			const res = await axios.get(`${BASE_URL}/admin/get_all_complaints`, {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			if (res.status && res.status === 200) {
				return res.data;
			} else {
				return rejectWithValue(res);
			}
		} catch (err) {
			console.log(err.message, 'erorr');
			return rejectWithValue(err.response.data);
		}
	}
);

export const getOneComplaint = createAsyncThunk(
	"complaint/id",
	async (payload, { rejectWithValue }) => {

		// const token = localStorage.getItem("token");
		try {
			const res = await axios.get(
				`${BASE_URL}/complaints/user_complaints/${payload.id}`,
				{
					headers: {
						accept: 'application/json',
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

export const updateComplaint = createAsyncThunk(
	"complaint/update",
	async (payload, { rejectWithValue }) => {

		const token = localStorage.getItem("token");

		try {
			const res = await axios.put(
				`${BASE_URL}/admin/update_complaint_status/${payload.id}`,
				{
					status: payload.status,
				},
				{
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json'
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

export const deleteComplaint = createAsyncThunk(
	"complaint/delete",
	async (payload, { rejectWithValue }) => {

		try {
			const res = await axios.delete(
				`${BASE_URL}/complaints/delete_User_complaint/${payload.id}`,
				{
					headers: {
						accept: 'application/json',
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
	name: 'complaints',
	initialState,
	reducers: {
		resetLoading: (state) => {
			state.loading = 'idle'
		}
	},
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
			.addCase(getOneComplaint.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(getOneComplaint.fulfilled, (state, action) => {
				state.complaint = action.payload;
				state.loading = 'success';
			})
			.addCase(getOneComplaint.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = 'failed';
			})
			.addCase(updateComplaint.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(updateComplaint.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = 'rejected';
			})
			.addCase(deleteComplaint.pending, (state) => {
				state.deleteStatus = 'pending';
			})
			.addCase(deleteComplaint.fulfilled, (state) => {
				state.deleteStatus = 'success';
				state.complaints = null;
			})
			.addCase(deleteComplaint.rejected, (state) => {
				state.deleteStatus = 'failed';
			})
	},
});


export const { resetLoading } = complaintsSlice.actions;
export default complaintsSlice.reducer;
