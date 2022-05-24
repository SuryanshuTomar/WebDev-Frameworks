import React, { useState } from "react";

export const UseState = () => {
	const [count, setCount] = useState(0);

	console.log("UseState Rendered");
	return (
		<div>
			<h4>UseState Counter : {count}</h4>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>
				Click Me
			</button>
			<button onClick={() => setCount(0)}>Count to 0</button>
			<button onClick={() => setCount(5)}>Count to 5</button>
		</div>
	);
};
