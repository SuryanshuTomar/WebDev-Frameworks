const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
	name: "Death Slayer",
	address: {
		street: "123 Side St",
		city: "New York City",
		state: "NY",
	},
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => {
	return {
		type: STREET_UPDATED,
		payload: street,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case STREET_UPDATED:
			// 	Manual updating of the state in redux
			// 	return {
			// 		...state,
			// 		address: {
			// 			...state.address,
			// 			street: action.payload,
			// 		},
			// };
			// Updating state using immer.producer method
			// Syntax ->
			// produce(initialState, Function(immutableState -> using which we can update the state))
			return produce(state, (draft) => {
				draft.address.city = action.payload;
			});
		default: {
			return state;
		}
	}
};

// get the creatStore instance
const createStore = redux.createStore;

// get the bindActionCreators instance
const bindActionCreators = redux.bindActionCreators;

// create the store
const store = createStore(reducer);

// Print the initial state
console.log("Initial State: ", initialState);

// Subscribe to the store
const unsubscribe = store.subscribe(() => {
	console.log("Updated State: ", store.getState());
});

// Dispatch Action Method 1
// store.dispatch(updateStreet("456 Hyperloop Line"));

// Dispatch Action Method 2
const actionDispatcher = bindActionCreators({ updateStreet }, store.dispatch);
actionDispatcher.updateStreet("465 Main St");

// Unsubscribe to the store
unsubscribe();
