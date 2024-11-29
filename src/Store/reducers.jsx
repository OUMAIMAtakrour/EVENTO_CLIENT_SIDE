import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice"; 
import eventReducer from "../Slices/EventSlice"; 


const store = configureStore({
  reducer: {
    auth: authReducer,
    event:eventReducer,
  },
});

export default store;
