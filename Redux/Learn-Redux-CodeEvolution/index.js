// IMPORTS
const redux = require("redux");
const axios = require("axios");
const reduxThunkMiddleware = require("redux-thunk").default;

// REDUX INSTANCES
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// INITIAL STATE
const initialState = {
	loading: false,
	users: [],
	error: "",
};

// ACTIONS
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// ACTION CREATORS
const fetchUserRequest = () => {
	return {
		type: FETCH_USERS_REQUESTED,
	};
};

const fetchUserSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCEEDED,
		payload: users,
	};
};

const fetchUserFailure = (error) => {
	return {
		type: FETCH_USERS_FAILED,
		payload: error,
	};
};

// ASYNC ACTION CREATOR -
// THAT RETURNS A FUNCTION WITH DISPATCH METHOD AS ITS ARGUMENTS INSTEAD OF AN ACTION OBJECT
const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUserRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				const users = response.data.map((user) => user.id);
				dispatch(fetchUserSuccess(users));
			})
			.catch((error) => {
				dispatch(fetchUserFailure(error.message));
			});
	};
};

// REDUCER
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCEEDED:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USERS_FAILED:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

// CREATE THE STORE WITH REDUX THUNK MIDDLEWARE
const store = createStore(userReducer, applyMiddleware(reduxThunkMiddleware));

// SUBSCRIBE TO THE STORE
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// DISPATCHING THE ASYNC ACTION CREATOR
store.dispatch(fetchUsers());

// unsubscribe();
