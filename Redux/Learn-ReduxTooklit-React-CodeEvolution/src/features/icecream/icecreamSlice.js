// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CREATESLICE FROM IT
import { createSlice } from "@reduxjs/toolkit";

// IMPORT THE CAKE ACTION
import { cakeActions } from "../cake/cakeSlice";

// 2. INITIAL STATE FOR THE SLICE
const initialState = {
	noOfIcecreams: 20,
};

// 3. NOW CREATE THE SLICE
const icecreamSlice = createSlice({
	name: "icecreamSlice",
	initialState,
	reducers: {
		icecreamOrder: (state, action) => {
			if (!action.payload) {
				state.noOfIcecreams -= 1;
				return;
			}
			state.noOfIcecreams -= action.payload;
		},
		icecreamRestock: (state, action) => {
			if (!action.payload) {
				state.noOfIcecreams += 1;
				return;
			}
			state.noOfIcecreams += action.payload;
		},
	},
	// Syntax 1 For extraReducers
	// extraReducers: {
	// 	["cakeSlice/cakeOrder"]: (state) => {
	// 		state.noOfIcecreams--;
	// 	},
	// },

	// Syntax 2 For extraReducers
	extraReducers: (builder) => {
		// syntax :
		// builder.addCase(actionCreator, function(state, action))
		builder.addCase(cakeActions.cakeOrder, (state) => {
			// mutate the state
			state.noOfIcecreams--;
		});
	},
});

// EXPORTING THE MAIN REDUCER AND ACTION CREATOR
export default icecreamSlice.reducer; // default export
export const icecreamActions = icecreamSlice.actions; // named export
