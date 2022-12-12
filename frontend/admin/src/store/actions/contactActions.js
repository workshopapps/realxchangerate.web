import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	contacts: null,
	contact: null,
	error: null,
	requestStatus: 'idle',
};

export const getContacts = createAsyncThunk(
	'get/contacts',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('token');
		try {
			const res = await axios.get(
				'https://api.streetrates.hng.tech/api/contacts/contact_details',
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
			console.log(err, 'erorr');
			return rejectWithValue(err.response.data);
		}
	}
);

// get single contact
export const getContact = createAsyncThunk(
	'get/contact',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('token');
		// console.log(payload);
		try {
			const res = await axios.get(
				`https://api.streetrates.hng.tech/api/contacts/contact_detatils/${payload}`,
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
			console.log(err, 'erorr');
			return rejectWithValue(err.response.data);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'delete/contact',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('token');
		try {
			const res = await axios.delete(
				`https://api.streetrates.hng.tech/api/contacts/delete_contact_detatil/${payload}`,
				{
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (res.status && res.status === 200) {
				console.log(res.data.data);
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
			})
			.addCase(getContact.pending, (state, action) => {
				state.requestStatus = 'pending';
			})
			.addCase(getContact.fulfilled, (state, action) => {
				state.contact = action.payload.Contacts;
				state.requestStatus = 'success';
			})
			.addCase(getContact.rejected, (state, action) => {
				state.requestStatus = 'failed';
				state.error = action.payload;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.requestStatus = 'success';
				// state.contacts = state.contacts.filter((item) =>
				// 	console.log(action.payload.data['contact us'].id, item.id)
				// );
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.requestStatus = 'failed';
				state.error = action.payload;
			});
	},
});

export default contactSlice.reducer;
