import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

function Form() {
	// const [isLoggedIn, ]
	return (
		<div>
			<form>
				<SignUpForm />
				<SignInForm />
			</form>{" "}
			<br />
			<br />
			<h3>Login Status :</h3>
		</div>
	);
}

export default Form;
