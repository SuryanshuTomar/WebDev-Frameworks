import React, { Component } from "react";
import InputComp from "./InputComp";

export class RefAttachedToClassComp extends Component {
	constructor(props) {
		super(props);
		// Note: Refs don't work with functions
		this.componentRef = React.createRef();
	}

	onClickHandler = () => {
		// Calling the child component Method using "ref"
		this.componentRef.current.focusInput();
	};
	render() {
		return (
			<div>
				<h1>RefAttachedToClassComp</h1>
				<InputComp ref={this.componentRef} />
				<button onClick={this.onClickHandler}>Focus Input</button>
			</div>
		);
	}
}

export default RefAttachedToClassComp;
