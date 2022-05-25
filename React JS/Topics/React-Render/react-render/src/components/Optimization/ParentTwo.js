import React, { useState } from "react";
import { MemoisedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Vishwas");

	console.log("ParentTwo Rendered");
	return (
		<div>
			<h4>ParentTwo Counter : {count}</h4>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>
				Click Me
			</button>
			<button onClick={() => setName("CodeEvolution")}>Change Name</button>
			<MemoisedChildTwo name={name} />
		</div>
	);
};
