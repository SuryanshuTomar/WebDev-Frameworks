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
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

// --------------------------------------------------------------------------------------------
// Action Creator for Ordering cake
function orderCake(qty = 1) {
	// Action
	return {
		type: CAKE_ORDERED,
		payload: qty,
	};
}

// Action Creator for Restocking cake
function restockCake(qty = 1) {
	return {
		type: RESTOCK_CAKE,
		payload: qty,
	};
}

// Action Creator for Ordering Icecream
function orderIcecream(qty = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload: qty,
	};
}

// Action Creator for Restocking Icecream
function restockIcecream(qty = 1) {
	return {
		type: RESTOCK_ICECREAM,
		payload: qty,
	};
}

// --------------------------------------------------------------------------------------------
// Initial State (state of a store has to be represent with a single object always)
const initialState = {
	numOfCakes: 10,
	numOfIcecreams: 20,
};

// Reducer Functions -
const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return { ...state, numOfCakes: state.numOfCakes - action.payload };
		case RESTOCK_CAKE:
			return { ...state, numOfCakes: state.numOfCakes + action.payload };
		case ICECREAM_ORDERED:
			return {
				...state,
				numOfIcecreams: state.numOfIcecreams - action.payload,
			};
		case RESTOCK_ICECREAM:
			return {
				...state,
				numOfIcecreams: state.numOfIcecreams + action.payload,
			};
		default:
			return state;
	}
};

// const

// --------------------------------------------------------------------------------------------
// Creating the Store
const store = createStore(shopReducer);

// Get state
console.log("Initial State: ", store.getState());

// Subscribing app to the store for changes
const unsubscribe = store.subscribe(() =>
	console.log("Updated State: ", store.getState())
);

// Dispatching action to reducer to update state
// store.dispatch(orderCake());
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(4));

// Dispatching action for Restocking cake
// store.dispatch(restockCake(5));
// store.dispatch(restockCake(8));

// Another way of Dispatching action
const actions = bindActionCreators(
	{ orderCake, restockCake, orderIcecream, restockIcecream },
	store.dispatch
);
actions.orderCake();
actions.orderCake(2);
actions.orderCake(4);
actions.restockCake(5);
actions.restockCake(8);
actions.orderIcecream();
actions.orderIcecream(3);
actions.restockIcecream();
actions.restockIcecream(4);

// Unsubscribing the app from the store
unsubscribe();
