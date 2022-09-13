import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
	const navigate = useNavigate();

	const onClickHandler = () => {
		// Pass -1 to go back to the page
		navigate(-1);
	};

	return (
		<div>
			<h1>Order Confirmed!</h1>
			<button onClick={onClickHandler}>Go Back</button>
		</div>
	);
}

export default OrderSummary;
