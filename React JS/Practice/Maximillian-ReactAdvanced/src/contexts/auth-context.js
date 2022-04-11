import React, { useState, useEffect } from "react";

// Creating React context which takes an state or component as an argument and returns a
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const userLoggedInInformation = localStorage.getItem("isLoggedIn");

		if (userLoggedInInformation === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = () => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.setItem("isLoggedIn", "0");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

// const { Provider, Consumer } = React.createContext({
// 	isLoggedIn: false,
// });
// export { Provider, Consumer };
