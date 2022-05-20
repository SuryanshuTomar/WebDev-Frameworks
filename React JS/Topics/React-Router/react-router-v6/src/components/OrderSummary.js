import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
	const navigate = useNavigate();

	return (
		<>
			<h3>Order Confirmed !!!</h3>
			<button
				onClick={() => {
					// Passing -1 to go back to previous page
					// navigate(-1);
					navigate("/");
				}}
			>
				Back To Home
			</button>
		</>
	);
}

export default OrderSummary;
