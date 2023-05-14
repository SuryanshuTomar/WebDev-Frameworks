import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/userSlice.js";

// This will directly dispatch the action of fetchUsers() right when our app starts and fetch the users from the api
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);
