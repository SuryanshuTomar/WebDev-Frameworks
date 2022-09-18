import React, { Component } from "react";

export class HoverCounterTwo extends Component {
	render() {
		return (
			<div>
				<h1>HoverCounterTwo</h1>
				<h3 onMouseOver={this.props.incrementCount}>
					{" "}
					Hovered {this.props.count} times
				</h3>
			</div>
		);
	}
}

export default HoverCounterTwo;
