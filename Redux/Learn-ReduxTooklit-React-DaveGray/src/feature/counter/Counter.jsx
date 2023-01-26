import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<section>
			<h2>COUNTER APP</h2>
			<p>Count is : {count}</p>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(reset())}>0</button>
			<button onClick={() => dispatch(increment())}>+</button>
		</section>
	);
};

export default Counter;
