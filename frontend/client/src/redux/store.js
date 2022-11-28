import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './features/Reducers/servicesReducer';


export const store = configureStore({
  reducer: {
    service : servicesReducer
  },
})

export const dispatch = store.dispatch;