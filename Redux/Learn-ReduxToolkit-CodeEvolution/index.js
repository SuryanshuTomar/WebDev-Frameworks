// IMPORT THE STORE
const store = require("./app/store");

// IMPORT ACTION CREATORS FROM THE SLICE FILES
const { cakeActions } = require("./features/cake/cakeSlice");

// PRINT THE INITIAL STATE
console.log("Initial State: ", store.getState());

// SUBSCRIBE TO THE STORE
const unsubscribe = store.subscribe(() => {
	console.log("Updated State: ", store.getState());
});

// DISPATCH ACTION
store.dispatch(cakeActions.cakeOrdered());
store.dispatch(cakeActions.cakeOrdered(5));
store.dispatch(cakeActions.cakeRestocked(5));
store.dispatch(cakeActions.cakeRestocked(10));

unsubscribe();
