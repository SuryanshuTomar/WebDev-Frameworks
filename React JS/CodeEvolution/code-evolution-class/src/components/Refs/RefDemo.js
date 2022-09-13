import React, { Component } from "react";

class RefDemo extends Component {
	constructor(props) {
		super(props);

		// Note: Refs gives us the accessibility to directly access the DOM nodes within React
		// Step1: Create a reference and store it in a class property variable
		// In this case, it is "inputRef"
		this.inputRef = React.createRef();

		this.state = {
			inputValue: "",
		};
	}

	// Step3: Modify or use the inputRef however you like
	componentDidMount() {
		this.inputRef.current.focus();
		console.log(this.inputRef);
	}

	// Step3: Modify or use the inputRef however you like
	onChangeHandler = () => {
		this.setState({ inputValue: this.inputRef.current.value });
	};

	render() {
		return (
			<div>
				<h1>RefDemo</h1>
				{/* Step2: Attaching the reference "ref" of an element and assigning the "inputRef" value to the Reserved "ref" named attribute  */}
				<input
					type="text"
					ref={this.inputRef}
					value={this.state.inputValue}
					onChange={this.onChangeHandler}
				/>
				<h3>{this.state.inputValue}</h3>
			</div>
		);
	}
}

export default RefDemo;
