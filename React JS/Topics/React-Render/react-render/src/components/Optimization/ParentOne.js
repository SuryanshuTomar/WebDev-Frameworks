import React, { useState } from "react";

export const ParentOne = ({ children }) => {
	const [count, setCount] = useState(0);

	console.log("ParentOne Rendered");
	return (
		<div>
			<h4>ParentOne Counter : {count}</h4>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>
				Click Me
			</button>
			{children}
		</div>
	);
};
