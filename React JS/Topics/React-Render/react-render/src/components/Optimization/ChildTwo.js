import React from "react";

export const ChildTwo = () => {
	console.log("ChildTwo Rendered");
	return <div>ChildTwo</div>;
};

export const MemoisedChildTwo = React.memo(ChildTwo);
