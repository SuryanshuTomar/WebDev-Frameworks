import React, { Component } from "react";

class ChildComponent extends Component {
	greetHandler = () => {
		this.props.greetParent("I am a Child Component Message");
	};

	render() {
		return (
			<div>
				<h1>Child Component</h1>
				<button onClick={this.greetHandler}>Greet Parent</button>
			</div>
		);
	}
}

export default ChildComponent;
