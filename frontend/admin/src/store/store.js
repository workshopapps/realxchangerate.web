import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./actions/userActions";
import dashboardReducer from "./actions/dashboardActions";
import complaintsReducer from "./actions/complaintsActions"


export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
    complaints: complaintsReducer,
  },
});
