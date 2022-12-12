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
			const res = await axios.post(
				'https://api.streetrates.hng.tech/api/forgot_password?email=admin%40email.com',
				{
					email: payload.email,
				},
				config
			);

			if (res.status && res.status === 200) {
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
			});
	},
});

export default passwordSlice.reducer;
