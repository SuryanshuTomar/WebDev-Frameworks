// IMPORT THE STORE
const store = require("./app/store");

// IMPORT ACTION CREATORS FROM THE SLICE FILES
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const { fetchUsersAction } = require("./features/user/userSlice");

// PRINT THE INITIAL STATE
console.log("Initial State: ", store.getState());

// SUBSCRIBE TO THE STORE
const unsubscribe = store.subscribe(() => {
	console.log("Updated State: ", store.getState());
});

// DISPATCH ACTION
// store.dispatch(cakeActions.cakeOrder());
// store.dispatch(cakeActions.cakeOrder(5));
// store.dispatch(cakeActions.cakeRestock());
// store.dispatch(cakeActions.cakeRestock(10));

// store.dispatch(icecreamActions.icecreamOrder());
// store.dispatch(icecreamActions.icecreamOrder(8));
// store.dispatch(icecreamActions.icecreamRestock());
// store.dispatch(icecreamActions.icecreamRestock(12));

// DISPATCH ASYNC ACTION
store.dispatch(fetchUsersAction());

// unsubscribe();
