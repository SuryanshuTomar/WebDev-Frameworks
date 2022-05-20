import { useState, useEffect } from "react";

const useCounter = (counterValue) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + counterValue);
		}, 1000);

		return () => clearInterval(interval);
	}, [counterValue]);

	return counter;
};

export default useCounter;
