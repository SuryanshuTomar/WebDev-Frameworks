import React, { useState, useEffect } from "react";
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";

import { db } from "./firebase-config";

function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	const addUserHandler = async () => {
		await addDoc(usersCollectionRef, { name, age: Number(age) });
		setName("");
		setAge(0);
	};

	const increaseAgeHandler = async (id, age) => {
		const userDoc = doc(db, "users", id);
		const newFields = { age: age + 1 };
		await updateDoc(userDoc, newFields);
	};

	const deleteUser = async (id) => {
		const userDoc = doc(db, "users", id);
		await deleteDoc(userDoc, id);
	};

	useEffect(() => {
		// Getting users from the collections on page load and on users Collection change
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUsers();
	}, [usersCollectionRef]);
	return (
		<div className="App">
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>
			<button onClick={addUserHandler}>Add User</button>
			{users.map((user) => (
				<div key={user.id}>
					<h3>
						Name: {user.name}, Age: {user.age}
						<br />
						<button onClick={() => increaseAgeHandler(user.id, user.age)}>
							Increase Age
						</button>
						<button onClick={() => deleteUser(user.id)}>
							Delete User
						</button>
					</h3>
				</div>
			))}
		</div>
	);
}

export default App;
