import React from "react";

const ForwardRefInput = React.forwardRef((props, ref) => {
	return (
		<div>
			<h1>ForwardRefInput</h1>
			<input type="text" ref={ref} />
		</div>
	);
});

export default ForwardRefInput;
