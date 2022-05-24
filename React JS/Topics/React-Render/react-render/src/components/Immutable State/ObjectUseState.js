import React, { useState } from "react";

const initialState = {
	fName: "Bruce",
	lName: "Banner",
};

export const ObjectUseState = () => {
	const [fullName, setFullName] = useState(initialState);

	const changeName = () => {
		fullName.fName = "Incredible";
		fullName.lName = "Hulk";
		const newFullName = {
			fName: fullName.fName,
			lName: fullName.lName,
		};
		setFullName(newFullName);
	};

	console.log("ObjectUseState Rendered");
	return (
		<div>
			<h4>FirstName : {fullName.fName}</h4>
			<h4>LastName : {fullName.lName}</h4>
			<button onClick={changeName}>Change Name</button>
		</div>
	);
};
