import React from "react";

function MemoComp({ name }) {
	console.log("Rendering Memo Component...");
	return (
		<div>
			<h2>MemoComp {name}</h2>
		</div>
	);
}

// React.memo is used for Functional Component.
// Just Like Pure Compoents are used for Class Components.
export default React.memo(MemoComp);
