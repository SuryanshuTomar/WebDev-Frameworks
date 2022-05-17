import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

function Form() {
	const [loggedUser, setLoggedUser] = useState({});

	const loggeUserHandler = (user) => {
		setLoggedUser(user);
	};

	return (
		<div>
			<form>
				<SignUpForm setUser={loggeUserHandler} />
				<SignInForm loggedUser={loggedUser} setUser={loggeUserHandler} />
			</form>{" "}
			<br />
			<br />
			<h3>User : {loggedUser?.email ? loggedUser.email : "Guest"}</h3>
		</div>
	);
}

export default Form;
