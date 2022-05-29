// Importing the redux module
const redux = require("redux");

// Getting createStore instance
// const createStore = redux.createStore;
const createStore = redux.legacy_createStore;

// Bind Action Creator
const bindActionCreators = redux.bindActionCreators;

// Action Types
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

// Action Creator or Ordering cake
function orderCake(qty = 1) {
	// Action
	return {
		type: CAKE_ORDERED,
		payload: qty,
	};
}

// Action Creator or Restocking cake
function restockCake(qty = 1) {
	return {
		type: RESTOCK_CAKE,
		payload: qty,
	};
}

// Initial State (state of a store has to be represent with a single object always)
const initialState = {
	numOfCakes: 10,
};

// Reducer Function
const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return { ...state, numOfCakes: state.numOfCakes - action.payload };
		case RESTOCK_CAKE:
			return { ...state, numOfCakes: state.numOfCakes + action.payload };
		default:
			return state;
	}
};

// Creating the Store
const cakeStore = createStore(shopReducer);

// Get state
console.log("Initial State: ", cakeStore.getState());

// Subscribing app to the store for changes
const unsubscribe = cakeStore.subscribe(() =>
	console.log("Updated State: ", cakeStore.getState())
);

// Dispatching action to reducer to update state
// cakeStore.dispatch(orderCake());
// cakeStore.dispatch(orderCake(2));
// cakeStore.dispatch(orderCake(4));

// Dispatching action for Restocking cake
// cakeStore.dispatch(restockCake(5));
// cakeStore.dispatch(restockCake(8));

// Another way of Dispatching action
const actions = bindActionCreators(
	{ orderCake, restockCake },
	cakeStore.dispatch
);
actions.orderCake();
actions.orderCake(2);
actions.orderCake(4);
actions.restockCake(5);
actions.restockCake(8);

// Unsubscribing the app from the store
unsubscribe();
