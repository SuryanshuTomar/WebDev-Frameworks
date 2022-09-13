import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
	return (
		<div>
			<Link to={`${1}`}>
				<h3>User 1</h3>
			</Link>
			<Link to={`${2}`}>
				<h3>User 2</h3>
			</Link>
			<Link to={`${3}`}>
				<h3>User 3</h3>
			</Link>
			<hr />
			<h2>Details Page : </h2>
			<Outlet />
		</div>
	);
}

export default Users;
