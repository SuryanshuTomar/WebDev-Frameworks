import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

function CakeView() {
	// USESELECTOR HOOK TAKE A SELECTOR CALLBACK FUNCTION THAT RETURNS THE STATE OF ANY SLICE.
	const noOfCakes = useSelector((state) => state.cake.noOfCakes);

	// USEDISPATCH RETURNS A REFERENCE TO THE DISPATCH FUNCTION FROM THE STORE.
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of cakes - {noOfCakes}</h2>
			<button onClick={() => dispatch(cakeActions.cakeOrder())}>
				Order cake
			</button>
			<button onClick={() => dispatch(cakeActions.cakeRestock(5))}>
				Restock cake
			</button>
		</div>
	);
}

export default CakeView;
