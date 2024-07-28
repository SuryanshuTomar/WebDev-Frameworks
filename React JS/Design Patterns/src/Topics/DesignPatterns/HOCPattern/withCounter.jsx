import { useState } from "react";

const withCounter = (Element) => {
	function WithCounter(props) {
		const [count, setCount] = useState(0);

		const handleCount = (action, payload = 1) => {
			switch (action) {
				case "increment":
					setCount((prevCount) => prevCount + payload);
					break;
				case "decrement":
					setCount((prevCount) => prevCount - payload);
					break;
				case "reset":
					setCount(0);
					break;
				default:
					break;
			}
		};

		return <Element {...props} count={count} countHandler={handleCount} />;
	}

	return WithCounter;
};
export default withCounter;
