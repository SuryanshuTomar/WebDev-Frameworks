import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<span>React Context State Management</span>
			<ul className="nav">
				<li className="page home">
					<NavLink to="/">Home Page</NavLink>
				</li>
				<li className="page cart">
					<NavLink to="/cart">Cart Page</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
