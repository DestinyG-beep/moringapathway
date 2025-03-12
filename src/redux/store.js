import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
  },
});

export default store;
