import React, { useState } from "react";
// useState is a function from react module and is a named import

// General Rules for Hooks -
// 1. Always starts with the word use and are in camelCase
// 2. Components in which we are using hooks must be in Uppercase otherwise the hooks won't work.
// 3. Hooks must always be the function/component Body
// 4. Cannot be Rendered Conditionally

const UseStateBasics = () => {
	// const value = useState("Yo")[0];
	// const handler = useState("Yo")[1];
	// console.log(value, handler);

	const [title, setTitle] = useState("Old Title");

	const handleClick = () => {
		setTitle(title === "Old Title" ? "New Title" : " Old Title");
		console.log(title);
	};

	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button type="button" className="btn" onClick={handleClick}>
				Change Title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
