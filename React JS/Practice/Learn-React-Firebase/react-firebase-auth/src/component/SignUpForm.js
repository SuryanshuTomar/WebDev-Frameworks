import React, { useState } from "react";

function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<h3>Register User</h3>
			<label htmlFor="email">Email : </label>
			<input
				type="text"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>{" "}
			<label htmlFor="password">Password : </label>
			<input
				type="text"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{"  "}
			<button>Create User</button>
		</div>
	);
}

export default SignUpForm;
