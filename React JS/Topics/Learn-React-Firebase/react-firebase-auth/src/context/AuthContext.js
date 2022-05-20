import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const loggedUserReducer = (currentUser, action) => {
	if (action.type === "USER") {
		return action.user;
	} else {
		return currentUser;
	}
};

function AuthContextProvider(props) {
	const [loggedUser, dispatchUser] = useReducer(loggedUserReducer, {});

	return (
		<AuthContext.Provider value={{ dispatchUser, loggedUser }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
