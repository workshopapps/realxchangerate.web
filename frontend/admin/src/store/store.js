import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./actions/userActions";


export const store = configureStore({
  reducer: {
    user: userReducer
  },
});
