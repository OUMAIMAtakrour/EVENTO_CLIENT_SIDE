import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import eventReducer from "../Slices/EventSlice";
import userReducer from "../Slices/UserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer,
    user: userReducer,
  },
});

export default store;
