import React from "react";
import ReactDOM from "react-dom";

// Portal are mainly used for Models, tool-tips and pop-ups
function Portal() {
	return ReactDOM.createPortal(
		<h1>Portal</h1>,
		document.getElementById("portal-root")
	);
}

export default Portal;
