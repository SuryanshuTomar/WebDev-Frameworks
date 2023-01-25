import React from "react";
import { useSelector } from "react-redux";

function CakeView() {
	// USESELECTOR HOOK TAKE A SELECTOR CALLBACK FUNCTION THAT RETURNS THE STATE OF ANY SLICE.
	const noOfCakes = useSelector((state) => state.cake.noOfCakes);
	return (
		<div>
			<h2>Number of cakes - {noOfCakes}</h2>
			<button>Order cake</button>
			<button>Restock cake</button>
		</div>
	);
}

export default CakeView;
