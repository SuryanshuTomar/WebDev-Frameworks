import React, { useState } from "react";

const initialState = ["Tony", "Stark"];

export const ArrayUseState = () => {
	const [fullName, setFullName] = useState(initialState);

	const changeName = () => {
		fullName[0] = "Iron";
		fullName[1] = "Man";
		const newFullName = [fullName[0], fullName[1]];
		setFullName(newFullName);
	};

	console.log("ArrayUseState Rendered");

	return (
		<div>
			<h4>FirstName : {fullName[0]}</h4>
			<h4>LastName : {fullName[1]}</h4>
			<button onClick={changeName}>Change Name</button>
		</div>
	);
};
