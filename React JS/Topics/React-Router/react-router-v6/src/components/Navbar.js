import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return {
				fontStyle: "italic",
				color: "bisque",
			};
		}
	};

	return (
		<nav>
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
