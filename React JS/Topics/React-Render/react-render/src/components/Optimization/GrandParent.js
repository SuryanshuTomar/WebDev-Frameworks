import React, { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () => {
	const [newCount, setNewCount] = useState(0);

	console.log("Grandparent Rerendered");
	return (
		<div>
			<button onClick={() => setNewCount((prevCount) => prevCount + 1)}>
				GrandParent Count - {newCount}
			</button>
			<ParentOne newCount={newCount}>
				<ChildOne />
			</ParentOne>
		</div>
	);
};
