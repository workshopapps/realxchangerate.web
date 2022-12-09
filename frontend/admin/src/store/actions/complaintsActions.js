import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	complaints: null,
	complaint: null,
	error: null,
	loading: 'idle',
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

export const updateComplaint = createAsyncThunk(
	"complaint/id",
	async (payload, { rejectWithValue }) => {

		const token = localStorage.getItem("token");
		console.log(payload)

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
			.addCase(updateComplaint.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(updateComplaint.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = 'rejected';
			})
	},
});


export const { resetLoading } = complaintsSlice.actions;
export default complaintsSlice.reducer;
