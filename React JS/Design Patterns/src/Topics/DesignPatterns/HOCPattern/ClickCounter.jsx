/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import withCounter from "./withCounter";

const ClickCounter = ({ count, countHandler }) => {
	return (
		<div>
			<h3>ClickCounter : {count}</h3>
			<button onClick={() => countHandler("decrement", 5)}>
				Decrement 5
			</button>{" "}
			<button onClick={() => countHandler("reset")}>Reset</button>{" "}
			<button onClick={() => countHandler("increment", 5)}>
				Increment 5
			</button>
		</div>
	);
};
export default withCounter(ClickCounter);
