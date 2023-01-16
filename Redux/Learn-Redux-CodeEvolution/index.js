// Import redux
const redux = require("redux");

// GET CREATESTORE INSTANCE
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// ACTION TYPE
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTORE_CAKE = "RESTORE_CAKE";

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

// INITIAL STATE
const initialState = {
	noOfCakes: 10,
};

// REDUCER FUNCTION
const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return { ...state, noOfCakes: state.noOfCakes - action.payload };
		case RESTORE_CAKE:
			return { ...state, noOfCakes: state.noOfCakes + action.payload };
		default:
			return state;
	}
};

// CREATE STORE
const store = createStore(cakeReducer);

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
// 1. BIND ACTION CREATORS WITH DISPATCH
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);

// 2. CALL THE ACTION CREATOR FUNCTION USING ACTIONS
actions.orderCake();
actions.orderCake();
actions.orderCake(5);
actions.restockCake();
actions.restockCake(2);
actions.restockCake(4);

// UNSUBSCRIBE TO THE STORE
unsubscribe();
