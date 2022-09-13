import React, { Component } from "react";

class RegularComp extends Component {
	render() {
		console.log("*****Regular Component Render******");
		return (
			<div>
				<p>
					1. A Regular Component does not implement the
					shouldComponentUpdate() method. It always return true by default
				</p>
				<h2>RegularComp {this.props.name}</h2>
			</div>
		);
	}
}

export default RegularComp;
