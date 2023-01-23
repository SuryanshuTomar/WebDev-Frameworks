// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CREATESLICE FROM IT
const createSlice = require("@reduxjs/toolkit").createSlice;

// 2. INITIAL STATE FOR THE SLICE
const initialState = {
	noOfCakes: 10,
};

// 3. NOW CREATE THE SLICE
// - To create the slice, we need to invoke the createSlice method which takes an object with three keys -
//    A. First key is the "name" key which defines the name for a particular feature/slice.
//    B. Second key is the "intialState" of the slice/feature.
//    C. Third key is the "reducers" which also takes an object -
//       a. The reducers object takes a key with reducer functions as its value that has currentState and action passed as its parameters. And the key we have defined describes the action for the reducer function we have written and the createSlice will create the action creator itself according to the key action we have defined.
//       b. Also, createSlice() method uses Immer library behind the scenes so we can directly mutate the state without returning a new state object along with destructring the old state.
//       c. createSlice() method returns an object with an action creator and a main reducer function which we can provide to create our store.

// - Syntax -
// const numChangeSlice = createSlice({
// 	name: "numChangeSlice",
// 	initialState: { num: value },
// 	reducers: {
// 		changeNum: (currState, action) => {
// 			currState.num++;
// 		},
// 	},
// });

const cakeSlice = createSlice({
	name: "cakeSlice",
	initialState,
	reducers: {
		// cakeOrdered is the action we have defined and
		// cakeSlice will create an action creator using this.
		cakeOrdered: (state, action) => {
			state.noOfCakes -= action.payload;
		},
		restocked: (state, action) => {
			state.noOfCakes += action.payload;
		},
	},
});

// EXPORTING THE MAIN REDUCER AND ACTION CREATOR
module.exports = cakeSlice.reducer; // default export
module.exports = { cakeActions: cakeSlice.actions }; // named export
// module.exports.cakeActions = cakeSlice.actions; // named export
