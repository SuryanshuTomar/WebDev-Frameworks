// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CREATESLICE FROM IT
const createSlice = require("@reduxjs/toolkit").createSlice;

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
});

// EXPORTING THE MAIN REDUCER AND ACTION CREATOR
module.exports = icecreamSlice.reducer; // default export
module.exports.icecreamActions = icecreamSlice.actions; // named export
