import React, { useState } from "react";
import MemoComp from "./MemoComp";

function ParentComp() {
	const [name, setState] = useState("Death");

	useState(() => {
		setInterval(() => {
			setState("Death");
		}, 2000);
	});

	return (
		<div>
			<h1>ParentComp</h1>
			<MemoComp name={name} />
		</div>
	);
}

export default ParentComp;
