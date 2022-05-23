import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
	const [user, setUser] = useState(null);

	const login = (user) => {
		setUser(user);
	};

	console.log(user);
	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthContextProvider;
