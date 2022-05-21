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
		<nav className="nav-primary">
			<NavLink style={navLinkStyle} to="/">
				Home
			</NavLink>
			<NavLink style={navLinkStyle} to="/about">
				About
			</NavLink>
			<NavLink style={navLinkStyle} to="/products">
				Products
			</NavLink>
			<NavLink stlye={navLinkStyle} to="/users">
				Users
			</NavLink>
		</nav>
	);
}

export default Navbar;
