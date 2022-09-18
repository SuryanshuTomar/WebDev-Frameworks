import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Portal extends Component {
	render() {
		// Portal are mainly used for Models, tool-tips and pop-ups
		return ReactDOM.createPortal(
			<h1>Portal</h1>,
			document.getElementById("portal-root")
		);
	}
}

export default Portal;
