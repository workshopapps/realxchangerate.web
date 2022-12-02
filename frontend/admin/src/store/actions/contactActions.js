import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	contacts: [],
	contact: {},
	error: null,
	requestStatus: 'idle',
};

export const getContacts = createAsyncThunk(
	'get/contact',
	async (payload, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				'https://api.streetrates.hng.tech/api/contacts/contact_details'
			);
			if (res.status && res.status === 200) {
				return res.data;
			} else {
				return rejectWithValue(res);
			}
		} catch (err) {
			console.log(err, 'erorr');
			return rejectWithValue(err.response.data);
		}
	}
);

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getContacts.pending, (state, action) => {
				state.requestStatus = 'pending';
			})
			.addCase(getContacts.fulfilled, (state, action) => {
				state.contacts = action.payload.Contacts;
				state.requestStatus = 'success';
			})
			.addCase(getContacts.rejected, (state, action) => {
				state.requestStatus = 'failed';
				state.error = action.payload;
			});
	},
});

export default contactSlice.reducer;
