import React, { useState } from "react";
import { MemoisedChildFour } from "./ChildFour";
// import { MemoisedChildThree } from "./ChildThree";

export const ParentThree = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Vishwas");

	console.log("ParentThree Rendered");
	return (
		<div>
			<h4>ParentThree Counter : {count}</h4>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>
				Click Me
			</button>
			<button onClick={() => setName("CodeEvolution")}>Change Name</button>
			{/* <MemoisedChildThree name={name}>
				<strong>Hello</strong>
			</MemoisedChildThree> */}
			<MemoisedChildFour name={name} />
		</div>
	);
};
