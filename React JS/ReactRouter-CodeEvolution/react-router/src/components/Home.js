import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const [isPlacingOrder, setIsPlacingOrder] = useState(false);
	const navigate = useNavigate();
	return (
		<>
			<h1>Home Page</h1>
			<button
				onClick={() => {
					setIsPlacingOrder(true);
					setTimeout(() => {
						setIsPlacingOrder(false);
						navigate("/order-summary");
					}, 2000);
				}}
			>
				Place Order
			</button>{" "}
			<br />
			<br />
			{isPlacingOrder && "Placing your order....."}
		</>
	);
}

export default Home;
