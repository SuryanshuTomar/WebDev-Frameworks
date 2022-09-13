import React, { Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefToFunction extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	onClickHandler = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<div>
				<h1>ForwardRefToFunction</h1>
				<ForwardRefInput ref={this.inputRef} />
				<button onClick={this.onClickHandler}>Focus Input</button>
			</div>
		);
	}
}

export default ForwardRefToFunction;
