import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
	count: 0,
};

// Feature Reducer
export const counterSlice = createSlice({
	// name for our Feature Reducer "counterSlice"
	name: "counter",

	// initial state for the Feature Reducer
	initialState,

	// Feature Reducer actions
	reducers: {
		// Reducer actions methods
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		reset: (state) => {
			state.count = 0;
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload;
		},
	},
});

// exporting reducer actions
export const {
	increment,
	decrement,
	reset,
	incrementByAmount,
} = counterSlice.actions;

// exporting the full reducer
export default counterSlice.reducer;
