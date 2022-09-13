import React, { Component } from "react";
import InputComp from "./InputComp";

export class RefAttachedToClassComp extends Component {
	constructor(props) {
		super(props);
		// Note: Refs don't work with functions
		this.componentRef = React.createRef();
	}

	onClickHandler = () => {
		// Calling the child component Method using "componentRef"
		// This "componentRef" is now pointing to the child class component
		// So we can call child class methods using this "componentRef"
		this.componentRef.current.focusInput();
	};
	render() {
		return (
			<div>
				<h1>RefAttachedToClassComp</h1>
				{/* Attaching ref to the child class component*/}
				<InputComp ref={this.componentRef} />
				<button onClick={this.onClickHandler}>Focus Input</button>
			</div>
		);
	}
}

export default RefAttachedToClassComp;
