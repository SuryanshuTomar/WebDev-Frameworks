import React, { useContext } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

import { AuthContext } from "../context/AuthContext";

function Form() {
	const { loggedUser } = useContext(AuthContext);

	return (
		<div>
			<form>
				<SignUpForm />
				<SignInForm />
			</form>{" "}
			<br />
			<br />
			<h3>User : {loggedUser?.email ? loggedUser.email : "Guest"}</h3>
		</div>
	);
}

export default Form;
