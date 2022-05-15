import React from "react";

export const AuthContext = React.createContext();

class AuthContextProvider extends React.Component {
	state = {
		isAuthenticated: false,
	};

	toggleAuth = () => {
		this.setState({ isAuthenticated: !this.state.isAuthenticated });
	};
	render() {
		return (
			<AuthContext.Provider
				value={{ ...this.state, toggleAuth: this.toggleAuth }}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export default AuthContextProvider;
