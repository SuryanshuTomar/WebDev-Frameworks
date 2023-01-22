// Import redux
const redux = require("redux");

// GET CREATESTORE INSTANCE
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// ACTION TYPE
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTORE_CAKE = "RESTORE_CAKE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

// ACTION CREATOR
function orderCake(qty = 1) {
	return {
		type: CAKE_ORDERED,
		payload: qty,
	};
}

function restockCake(qty = 1) {
	return {
		type: RESTORE_CAKE,
		payload: qty,
	};
}

function orderIcecream(qty = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload: qty,
	};
}

function restockIcecream(qty = 1) {
	return {
		type: ICECREAM_RESTOCK,
		payload: qty,
	};
}

// INITIAL STATE
const initialState = {
	noOfCakes: 10,
	noOfIcecreams: 20,
};

// REDUCER FUNCTION
const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return { ...state, noOfCakes: state.noOfCakes - action.payload };
		case RESTORE_CAKE:
			return { ...state, noOfCakes: state.noOfCakes + action.payload };
		case ICECREAM_ORDERED:
			return {
				...state,
				noOfIcecreams: state.noOfIcecreams - action.payload,
			};
		case ICECREAM_RESTOCK:
			return {
				...state,
				noOfIcecreams: state.noOfIcecreams + action.payload,
			};
		default:
			return state;
	}
};

// CREATE STORE
const store = createStore(shopReducer);

// GET INITIAL STATE
console.log("Initial State : ", store.getState());

// SUBSCRIBE TO THE STORE
// GET UPDATED STATE FROM STORE
const unsubscribe = store.subscribe(() =>
	console.log("Updated state: ", store.getState())
);

// DISPATCH ACTION METHOD - 1
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake(5));
// store.dispatch(restockCake());
// store.dispatch(restockCake(2));
// store.dispatch(restockCake(4));

// DISPATCH ACTION METHOD - 2
// 1. BIND ACTION CREATORS TO DISPATCH METHOD
const actions = bindActionCreators(
	{ orderCake, restockCake, orderIcecream, restockIcecream },
	store.dispatch
);

// 2. CALL THE ACTION CREATOR BOUND WITH DISPATCH METHOD USING ACTIONS
actions.orderCake();
actions.orderCake();
actions.orderCake(5);
actions.restockCake();
actions.restockCake(2);
actions.restockCake(4);

actions.orderIcecream();
actions.orderIcecream(4);
actions.orderIcecream(12);
actions.restockIcecream();
actions.restockIcecream(4);
actions.restockIcecream(10);

// UNSUBSCRIBE TO THE STORE
unsubscribe();
