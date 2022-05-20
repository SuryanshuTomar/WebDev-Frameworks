import React, { useState, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "../context/AuthContext";

function SignUpForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { dispatchUser } = useContext(AuthContext);

	onAuthStateChanged(auth, (currenUser) => {
		dispatchUser({ type: "USER", user: currenUser });
	});

	const register = async (email, password) => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(user);
		} catch (err) {
			console.log(err.message);
		}
	};

	const createUserHandler = (e) => {
		e.preventDefault();
		register(email, password);
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<h3>Register User</h3>
			<label htmlFor="email">Email : </label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>{" "}
			<label htmlFor="password">Password : </label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{"  "}
			<input type="submit" value="Create User" onClick={createUserHandler} />
		</div>
	);
}

export default SignUpForm;
