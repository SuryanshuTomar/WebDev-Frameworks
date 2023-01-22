// => STORE WITH MULTIPLE REDUCER IN STORE AND HOW TO COMBINE THEM INTO ONE REDUCER -

// Import redux
const redux = require("redux");

// GET CREATESTORE INSTANCE
const createStore = redux.createStore;

// GET BINDACTIONCREATORS INSTANCE
const bindActionCreators = redux.bindActionCreators;

// GET COMBINEREDUCERS INSTANCE
const combineReducers = redux.combineReducers;

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
const initialCakeState = {
	noOfCakes: 10,
};

const initialIcecreamState = {
	noOfIcecreams: 20,
};

// REDUCER FUNCTION
const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return { ...state, noOfCakes: state.noOfCakes - action.payload };
		case RESTORE_CAKE:
			return { ...state, noOfCakes: state.noOfCakes + action.payload };
		default:
			return state;
	}
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
	switch (action.type) {
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

// BEFORE CREATING THE STORE FOR MULTIPLE REDUCER,
// WE NEED TO COMBINE OUR REDUCERS INTO ONE ROOT REDUCER
const rootReducer = combineReducers({
	// Each key-value pair in this object corresponds to a single reducer
	cake: cakeReducer,
	icecream: IcecreamReducer,
});

// CREATE STORE
const store = createStore(rootReducer);

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

