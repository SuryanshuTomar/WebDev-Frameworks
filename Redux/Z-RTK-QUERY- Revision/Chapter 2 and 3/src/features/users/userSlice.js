import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
// const initialState = [
// 	{ id: "0", name: "Dude Lebowski" },
// 	{ id: "1", name: "Neil Young" },
// 	{ id: "2", name: "Dave Gray" },
// ];
const initialState = [];

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await axios.get(USERS_URL);
	return response.data;
});

// Users feature slice
export const userSlice = createSlice({
	// userSlice feature name
	name: "users",

	// initial state for the userSlice feature
	initialState,

	// reducers for the userSlice feature
	reducers: {
		something: () => {},
	},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			// here we are not updating the state but instead returning the action.payload
			// This means the payload will replace the entire slice state of users
			return action.payload;
		});
	},
});

// exporting userSlice "Action Creators" for the reducers of userSlice, that share the same name as the reducers methods defined in the userSlice created by the createSlice() method.
export const { something } = userSlice.actions;

// export the custom selector function for selecting the "users" feature state
// here the name "users" should be the same as the property name defined in the "reducer" property in the store.jsx file while configuring the store.
export const selectAllUsers = (storeState) => storeState.users;

// export the reducer for the userSlice
export default userSlice.reducer;
