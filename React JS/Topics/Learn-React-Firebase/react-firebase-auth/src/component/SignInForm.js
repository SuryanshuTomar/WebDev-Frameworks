import React, { useState, useContext } from "react";
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { AuthContext } from "../context/AuthContext";

function SignInForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { dispatchUser, loggedUser } = useContext(AuthContext);

	onAuthStateChanged(auth, (currenUser) => {
		dispatchUser({ type: "USER", user: currenUser });
	});

	const login = async (email, password) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log(user);
		} catch (err) {
			console.log(err.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};

	const loginUserHandler = (e) => {
		e.preventDefault();
		login(email, password);
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<div>
				<h3>Login User</h3>
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
				<input
					type="submit"
					value="Login User"
					onClick={loginUserHandler}
				/>
			</div>
			<br />
			{loggedUser && <button onClick={logout}>Sign Out</button>}
		</div>
	);
}

export default SignInForm;
