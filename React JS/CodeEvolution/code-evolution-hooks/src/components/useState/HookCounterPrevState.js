import React, { useState } from "react";

function HookCounterPrevState() {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	const changeFive = (change) => {
		setCount((prevCount) => prevCount + change);
	};

	return (
		<div>
			<h1>HookCounterPrevState</h1>
			<h3>Counter : {count}</h3>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Count - 1
			</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Count + 1
			</button>
			<button
				onClick={() => {
					changeFive(-5);
				}}
			>
				Count - 5
			</button>
			<button onClick={() => changeFive(+5)}>Count + 5</button>
			<button onClick={() => setCount(initialCount)}>Reset Counter</button>
		</div>
	);
}

export default HookCounterPrevState;
