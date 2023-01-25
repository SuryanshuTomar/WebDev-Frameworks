import { ReactElement, useState } from "react";

const Counter = (): ReactElement => {
	const [count, setCount] = useState<number>(0);

	const clickHandler = (changeVal: number): void => {
		if (changeVal === 0) {
			return setCount(changeVal);
		}
		setCount((count) => count + changeVal);
	};

	return (
		<div>
			<br />
			<hr />
			<br />
			<h2>Counter App</h2>
			<br />
			<h3>Count is : {count}</h3>
			<button onClick={() => clickHandler(0)}>Reset</button>
			<button onClick={() => clickHandler(-1)}>-</button>
			<button onClick={() => clickHandler(+1)}>+</button>
		</div>
	);
};

export default Counter;
