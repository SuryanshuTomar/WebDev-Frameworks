// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CREATESLICE FROM IT
const createSlice = require("@reduxjs/toolkit").createSlice;

// IMPORT THE CAKE ACTION
const { cakeActions } = require("../cake/cakeSlice");

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
module.exports = icecreamSlice.reducer; // default export
module.exports.icecreamActions = icecreamSlice.actions; // named export
