import React from "react";
import { signInWithGoogle } from "../firebase/firebase-config";

function SignInForm() {
	return (
		<div>
			<button onClick={signInWithGoogle}>Sign in with Google</button>
			<div>
				<h1>{localStorage.getItem("name")}</h1>
				<h1>{localStorage.getItem("email")}</h1>
				<img src={localStorage.getItem("dp")} alt="" />
			</div>
		</div>
	);
}

export default SignInForm;
