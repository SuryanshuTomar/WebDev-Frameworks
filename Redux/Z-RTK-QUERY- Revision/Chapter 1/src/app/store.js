import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
	// All the store reducers are in here at one place
	reducer: {
		counter: counterReducer,
	},
});
