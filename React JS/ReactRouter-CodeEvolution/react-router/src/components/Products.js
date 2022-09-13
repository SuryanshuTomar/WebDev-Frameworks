import React from "react";

import { Link, Outlet } from "react-router-dom";

function Products() {
	return (
		<>
			<div>
				<h1>Products</h1>
				<input type="text" placeholder="Search Products..." />
			</div>

			<nav className="nav-secondary">
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>
			</nav>
			{/* This will render the nested route component that is mentioned in the nested routes in the parent component. */}
			<Outlet />
		</>
	);
}

export default Products;
