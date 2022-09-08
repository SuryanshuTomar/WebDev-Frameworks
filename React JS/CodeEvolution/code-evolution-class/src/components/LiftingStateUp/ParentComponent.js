import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			parentName: "Parent",
		};
	}

	// Here child Message is the Lifted state as the value is passed from the child component to the parent component which is the opposite of what the props do.
	greetParent = (childMessage) => {
		alert(
			`1. Hello ${this.state.parentName}.
          \n2. Calling the Parent Component from the child component or passing the value of state from the child component to the state component is called Lifting State Up.
         \n3. ${childMessage}`
		);
	};

	render() {
		return (
			<div>
				<ChildComponent greetParent={this.greetParent} />
			</div>
		);
	}
}

export default ParentComponent;
