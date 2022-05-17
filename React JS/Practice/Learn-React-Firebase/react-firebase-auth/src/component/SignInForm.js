import React, { useState } from "react";

function SignInForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<div>
				<h3>Login User</h3>
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
				<button>Login User</button>
			</div>
		</div>
	);
}

export default SignInForm;
