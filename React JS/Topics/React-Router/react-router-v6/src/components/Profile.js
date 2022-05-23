import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Profile = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	return (
		<>
			<h3>Profile</h3>
			<>
				<h4>Welcome {user}</h4>
				<button
					onClick={() => {
						logout();
						navigate("/");
					}}
				>
					Logout
				</button>
			</>
		</>
	);
};
