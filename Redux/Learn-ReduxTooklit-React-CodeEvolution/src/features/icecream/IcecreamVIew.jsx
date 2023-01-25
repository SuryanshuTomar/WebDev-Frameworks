import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icecreamActions } from "./icecreamSlice";

function IcecreamVIew() {
	const [restockValue, setRestockValue] = useState(1);

	// USESELECTOR HOOK TAKE A SELECTOR CALLBACK FUNCTION THAT RETURNS THE STATE OF ANY SLICE.
	const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);

	// USEDISPATCH RETURNS A REFERENCE TO THE DISPATCH FUNCTION FROM THE STORE.
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of icecreams - {noOfIcecreams}</h2>
			<br />
			<label htmlFor="restock">Restock Value : </label>
			<input
				type="number"
				id="restock"
				value={restockValue}
				onChange={(e) => setRestockValue(parseInt(e.target.value))}
			/>{" "}
			<br />
			<button onClick={() => dispatch(icecreamActions.icecreamOrder())}>
				Order icecream
			</button>{" "}
			<button
				onClick={() =>
					dispatch(icecreamActions.icecreamRestock(restockValue))
				}
			>
				Restock icecream
			</button>
		</div>
	);
}

export default IcecreamVIew;
