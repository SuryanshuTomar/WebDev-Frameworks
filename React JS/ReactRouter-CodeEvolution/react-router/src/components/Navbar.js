import React from "react";
import { NavLink } from "react-router-dom";
// import { useAuth } from "./Auth";

function Navbar() {
	// const { user } = useAuth();
	// console.log(user);

	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return {
				fontStyle: "italic",
				color: "bisque",
			};
		}
	};

	return (
		<nav className="nav-primary">
			<NavLink style={navLinkStyle} to="/">
				Home
			</NavLink>
			<NavLink style={navLinkStyle} to="/about">
				About
			</NavLink>
		</nav>
	);
}

export default Navbar;
