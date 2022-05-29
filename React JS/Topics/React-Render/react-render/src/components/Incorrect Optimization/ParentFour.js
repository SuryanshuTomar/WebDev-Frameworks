import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Vishwas");

	const person = useMemo(() => {
		return {
			fname: "Bruce",
			lname: "Banner",
		};
	}, []);

	const handleClick = useCallback(() => {}, []);

	console.log("ParentFive Rendered");
	return (
		<div>
			<h4>ParentFour Counter : {count}</h4>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>
				Click Me
			</button>
			<button onClick={() => setName("CodeEvolution")}>Change Name</button>
			<MemoizedChildFive
				name={name}
				person={person}
				handleClick={handleClick}
			/>
		</div>
	);
};
