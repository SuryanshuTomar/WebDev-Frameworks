import React, { Component } from "react";

class InputComp extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
	}

	focusInput() {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<div>
				<h1>InputComp</h1>
				<input type="text" ref={this.inputRef} />
			</div>
		);
	}
}

export default InputComp;
