import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAction } from "./userSlice";

function UserView() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsersAction());
	}, []);

	return (
		<div>
			<div>
				<h2>List of Users</h2>
				{user.loading && <h3>Loading Users....</h3>}
				{!user.loading && user.error ? <div>Error: {user.error}</div> : null}
				{!user.loading && user.users.length ? (
					<ul>
						{user.users.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
}

export default UserView;
