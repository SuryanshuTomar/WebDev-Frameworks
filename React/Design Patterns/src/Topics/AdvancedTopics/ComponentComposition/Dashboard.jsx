import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ children }) => {
	console.log("Dashboard Rendered");

	const [count, setCount] = useState(0);

	useEffect(() => {
		const countHandler = () => {
			console.log("Count Handler called!");
			setCount((prevState) => prevState + 1);
		};

		document.addEventListener("keydown", countHandler);

		return () => document.removeEventListener("keydown", countHandler);
	}, []);

	return (
		<div>
			<h1>Counter : {count}</h1>
			{children}
		</div>
	);
};
export default Dashboard;
