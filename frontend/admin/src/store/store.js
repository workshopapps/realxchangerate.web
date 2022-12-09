import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions/userActions';
import dashboardReducer from './actions/dashboardActions';
import complaintsReducer from './actions/complaintsActions';
import contactsReducer from './actions/contactActions';
import  trendingReducer  from './actions/trendingActions';

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		user: userReducer,
		dashboard: dashboardReducer,
		complaints: complaintsReducer,
		trending: trendingReducer,
	},
});
