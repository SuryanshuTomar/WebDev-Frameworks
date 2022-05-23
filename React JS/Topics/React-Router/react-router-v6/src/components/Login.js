import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
	const [user, setUser] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const redirectPath = location.state?.path || "/";

	const loginHandler = () => {
		login(user);
		navigate(redirectPath, { replace: true });
	};

	return (
		<div>
			<br />
			<label>
				UserName :{" "}
				<input type="text" onChange={(e) => setUser(e.target.value)} />
			</label>{" "}
			<button onClick={loginHandler}>Login</button>
		</div>
	);
};
