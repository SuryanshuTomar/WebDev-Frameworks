import React from "react";

export const ChildFive = ({ name, person }) => {
	console.log("ChildFive Rendered");
	return (
		<div>
			Hello {name} {person.fname} {person.lname}
		</div>
	);
};

export const MemoizedChildFive = React.memo(ChildFive);
