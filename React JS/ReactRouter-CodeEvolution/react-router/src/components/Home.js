import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	function onClickListener() {
		navigate("order-summary", {
			// This will replace the current route in history
			// instead of pushing the route into the stack
			replace: true,
		});
	}

	return (
		<>
			<h1>Home Page</h1>
			<button onClick={onClickListener}>Place Order</button>
		</>
	);
}

export default Home;
