import React, { useContext } from "react";
import { countContext } from "./ContextParent";

export const ChildA = () => {
	console.log("Child A Render");
	return (
		<>
			<div>ChildA</div>
			<ChildB />
		</>
	);
};

export const MemoisedChildA = React.memo(ChildA);

export const ChildB = () => {
	console.log("Child B Render");
	return (
		<>
			<div>ChildB</div>
			<ChildC />
		</>
	);
};

export const ChildC = () => {
	const count = useContext(countContext);
	console.log("Child C Render");
	return (
		<>
			<div>ChildC Count : {count}</div>
		</>
	);
};
