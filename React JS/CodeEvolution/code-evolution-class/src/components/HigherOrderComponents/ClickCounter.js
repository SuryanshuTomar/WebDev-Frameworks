import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
	render() {
		return (
			<div>
				<h1>ClickCounter</h1>
				<button onClick={this.props.incrementCount}>
					{this.props.name} Clicked {this.props.count} times
				</button>
			</div>
		);
	}
}

export default UpdatedComponent(ClickCounter);
