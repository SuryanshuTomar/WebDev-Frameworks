import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function Users() {
	const [searchParams, setSearchParams] = useSearchParams();
	const showActiveUsers = searchParams.get("filter") === "active";
	return (
		<div>
			<Link to="1">
				<h3>User 1</h3>
			</Link>
			<Link to="2">
				<h3>User 2</h3>
			</Link>
			<Link to="3">
				<h3>User 3</h3>
			</Link>
			<Link to="admin">
				<h3>Admin</h3>
			</Link>
			<hr />
			<h2>Details Page : </h2>
			<Outlet />
			<div>
				<button onClick={() => setSearchParams({ filter: "active" })}>
					Active Users
				</button>
				<button onClick={() => setSearchParams({})}>Reset Filters</button>
			</div>

			{showActiveUsers ? (
				<h2>Showing Active Users</h2>
			) : (
				<h2>Showing All Users</h2>
			)}
		</div>
	);
}

export default Users;
