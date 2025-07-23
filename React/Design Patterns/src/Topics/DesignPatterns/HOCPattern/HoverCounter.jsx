/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import withCounter from "./withCounter";

const HoverCounter = ({ count, countHandler }) => {
	return (
		<div>
			<h3>HoverCounter : {count}</h3>
			<button onMouseEnter={() => countHandler("decrement", 5)}>
				Decrement 5
			</button>{" "}
			<button onMouseEnter={() => countHandler("reset")}>Reset</button>{" "}
			<button onMouseEnter={() => countHandler("increment", 5)}>
				Increment 5
			</button>
		</div>
	);
};
export default withCounter(HoverCounter);
