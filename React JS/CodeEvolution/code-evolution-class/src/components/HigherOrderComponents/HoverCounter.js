import React, { Component } from "react";
import withCounter from "./withCounter";

export class HoverCounter extends Component {
	render() {
		return (
			<div>
				<h1>HoverCounter</h1>
				<h3 onMouseOver={this.props.incrementCount}>
					{this.props.name} Hovered {this.props.count} times
				</h3>
			</div>
		);
	}
}

export default withCounter(HoverCounter);
