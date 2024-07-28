import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const ManageCounter = () => {
	const {
		counter: { count },
		dispatch,
	} = useContext(CounterContext);

	return (
		<div>
			<h3> Counter : {count}</h3>

			<button onClick={() => dispatch({ type: "decrement", value: 5 })}>
				Decrement 5
			</button>

			<button onClick={() => dispatch({ type: "decrement", value: 1 })}>
				Decrement 1
			</button>

			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>

			<button onClick={() => dispatch({ type: "increment", value: 1 })}>
				Increment 1
			</button>

			<button onClick={() => dispatch({ type: "increment", value: 5 })}>
				Increment 5
			</button>
		</div>
	);
};
export default ManageCounter;
