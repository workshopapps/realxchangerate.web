import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const endpoint = `https://api.streetrates.info/api/auth`;

const initialState = {
	user: null,
	error: null,
	registerStatus: 'idle',
	loginStatus: 'idle',
};
// const endpoint =
//   process.env.NODE_ENV === "production"
//     ? "https://api.streetrates.info/api/auth"
//     : process.env.NODE_ENV === "development"
//     ? "http://localhost:8000/api/auth"
//     : "";

export const loginUser = createAsyncThunk(
	'user/login',
	async (payload, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			};
			const res = await axios.post(
				endpoint,
				{
					username: payload.email,
					password: payload.password,
				},
				config
			);

			if (res.status && res.status === 200) {
				localStorage.setItem('token', res.data['access_token']);

				return res.data;
			} else {
				return rejectWithValue(res);
			}
		} catch (err) {
			// console.log(err, 'error');
			localStorage.removeItem('token');
			return rejectWithValue(err.response.data);
		}
	}
);

export const getUser = createAsyncThunk(
	'user/get',
	async (_, { rejectWithValue }) => {
		const token = localStorage.getItem('token');
		try {
			const res = await axios.get(`https://api.streetrates.info/api/user`, {
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			if (res.status && res.status === 200) {
				return res.data;
			} else {
				localStorage.removeItem('token');
				return rejectWithValue(res);
			}
		} catch (err) {
			// console.log(err.message, 'erorr');
			return rejectWithValue(err.response.data);
		}
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.loginStatus = 'idle';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loginStatus = 'loading';
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loginStatus = 'success';
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loginStatus = 'failed';
				state.error = action.payload;
			})
			.addCase(getUser.pending, (state, action) => {
				state.loginStatus = 'idle';
				state.error = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.loginStatus = 'failed';
				state.error = action.payload;
			});
	},
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
