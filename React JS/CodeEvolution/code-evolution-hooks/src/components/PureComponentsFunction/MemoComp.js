import React from "react";

function MemoComp({ name }) {
	console.log("Rendering Memo Component...");
	return (
		<div>
			<h2>MemoComp {name}</h2>
		</div>
	);
}

export default MemoComp;
