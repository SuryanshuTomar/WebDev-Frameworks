import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

import { useState } from "react";

const Counter = () => {
	// here useSelector will provide us the storeState
	// and we can access a paricular store Feature Reducer state using
	// the feature Reducer name which we have provided in the "reducer" property object
	// in the store while configuring the store using the "configureStore()" method
	const count = useSelector((storeState) => storeState.counter.count);

	// dispatch method provided to us by the useDispatch hook from react-redux
	// so that we can dispatch(call them) "actions" which we have created
	// in the feature reducers
	const dispatch = useDispatch();

	// state for increment and decrement by amount
	const [incrementAmount, setIncrementAmount] = useState(0);

	const addValue = Number(incrementAmount) || 0;

	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(reset());
	};

	return (
		<section>
			<p>Count : {count}</p>
			<div>
				<button onClick={() => dispatch(decrement())}>-1</button>
				<button onClick={() => dispatch(increment())}>+1</button>
				<br />
				<input
					type="text"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
			</div>
			<div>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>
					Add Amount
				</button>
				<button onClick={resetAll}>Reset Values</button>
			</div>
		</section>
	);
};
export default Counter;
