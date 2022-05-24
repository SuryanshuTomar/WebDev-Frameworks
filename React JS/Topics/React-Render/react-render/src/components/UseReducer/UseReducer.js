import React, { useReducer } from "react";

const initialState = 0;

const countReducer = (currentState, action) => {
	switch (action.type) {
		case "increment":
			return currentState + 1;
		case "decrement":
			return currentState - 1;
		case "reset":
			return initialState;
		default:
			return currentState;
	}
};

export const UseReducer = () => {
	const [count, dispatchCounter] = useReducer(countReducer, initialState);

	console.log("UseReducer Rerendered");

	return (
		<div>
			<h4>UseReducer Counter : {count}</h4>
			<button onClick={() => dispatchCounter({ type: "increment" })}>
				Counter + 1
			</button>
			<button onClick={() => dispatchCounter({ type: "decrement" })}>
				Counter - 1
			</button>
			<button onClick={() => dispatchCounter({ type: "reset" })}>
				Reset Counter
			</button>
		</div>
	);
};
