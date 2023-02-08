import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "../api/contactsApi";
import contactsApiReducer from "../api/contactsApi";

const store = configureStore({
	reducer: {
		[contactsApi.reducerPath]: contactsApiReducer,
	},
	// mandatory to add apiSlice Middleware if you use one
	middleware: (getDefaultMiddleware) =>
		// this apiSlice middleware manages cache, cache lifetimes and expirations
		getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
