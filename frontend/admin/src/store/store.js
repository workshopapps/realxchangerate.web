import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./actions/userActions";
import  dashboardReducer from "./actions/dashboardActions";


export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer 
  },
});
