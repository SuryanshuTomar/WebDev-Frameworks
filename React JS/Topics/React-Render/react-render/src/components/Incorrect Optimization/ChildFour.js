import React from "react";

export const ChildFour = ({ name }) => {
	const date = new Date();
	console.log("ChildFour Rendered");
	return (
		<div>
			Hello {name}
			<div>
				It is currently : {date.getHours()} : {date.getMinutes()} :{" "}
				{date.getSeconds()}
			</div>
		</div>
	);
};

export const MemoisedChildFour = React.memo(ChildFour);
