import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the user reducer

export const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer
  },
});
