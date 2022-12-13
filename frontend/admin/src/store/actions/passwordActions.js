import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	requestStatus: 'idle',
};

export const userForgotPassword = createAsyncThunk(
	'user/forgotPassword',
	async (payload, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			};
			const search = payload.email;
			const res = await axios.post(
				`https://api.streetrates.hng.tech/api/forgot_password?email=${search}`,
				{
					email: payload.email,
				},
				config
			);

			if (res.status && res.status === 200) {
				// console.log(search);
				return res.data;
			} else {
				return rejectWithValue(res);
			}
		} catch (err) {
			console.log(err, 'error');
			return rejectWithValue(err.response.data);
		}
	}
);

export const resetPassword = createAsyncThunk(
	'user/resetPassword',
	async (payload, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			};
			const search = payload.email;
			const res = await axios.patch(
				`https://api.streetrates.hng.tech/api/reset_password/${search}`,
				{
					email: search,
					password: payload.password,
				},
				config
			);

			if (res.status && res.status === 200) {
				// console.log(search);
				return res.data;
			} else {
				return rejectWithValue(res);
			}
		} catch (err) {
			console.log(err, 'error');
			return rejectWithValue(err.response.data);
		}
	}
);

export const passwordSlice = createSlice({
	name: 'password',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(userForgotPassword.pending, (state, action) => {
				state.requestStatus = 'pending';
			})
			.addCase(userForgotPassword.fulfilled, (state, action) => {
				state.requestStatus = 'success';
			})
			.addCase(userForgotPassword.rejected, (state, action) => {
				state.requestStatus = 'failed';
				state.error = action.payload;
			})
			.addCase(resetPassword.pending, (state, action) => {
				state.requestStatus = 'pending';
			})
			.addCase(resetPassword.fulfilled, (state, action) => {
				state.requestStatus = 'success';
			})
			.addCase(resetPassword.rejected, (state, action) => {
				state.requestStatus = 'failed';
				state.error = action.payload;
			});
	},
});

export default passwordSlice.reducer;
