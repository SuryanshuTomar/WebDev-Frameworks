import React, { Component } from "react";

export class ClickCounterTwo extends Component {
	render() {
		return (
			<div>
				<h1>ClickCounterTwo</h1>
				<button onClick={this.props.incrementCount}>
					{" "}
					Clicked {this.props.count} times
				</button>
			</div>
		);
	}
}

export default ClickCounterTwo;
