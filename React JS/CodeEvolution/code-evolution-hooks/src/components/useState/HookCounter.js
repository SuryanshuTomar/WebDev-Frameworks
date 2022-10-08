import React, { useState } from "react";

function HookCounter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>HookCounter</h1>
			<h3>Counter : {count}</h3>
			<button onClick={() => setCount(count - 1)}>Count - 1</button>
			<button onClick={() => setCount(count + 1)}>Count + 1</button>
		</div>
	);
}

export default HookCounter;
