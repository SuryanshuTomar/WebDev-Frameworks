import React from "react";
import { useSelector } from "react-redux";

function IcecreamVIew() {
	// USESELECTOR HOOK TAKE A SELECTOR CALLBACK FUNCTION THAT RETURNS THE STATE OF ANY SLICE.
	const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
	return (
		<div>
			<h2>Number of icecreams - {noOfIcecreams}</h2>
			<button>Order icecream</button>
			<button>Restock icecream</button>
		</div>
	);
}

export default IcecreamVIew;
