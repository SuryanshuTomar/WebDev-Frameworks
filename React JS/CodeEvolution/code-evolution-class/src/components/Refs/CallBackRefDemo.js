import React, { Component } from "react";

export class CallBackRefDemo extends Component {
	constructor(props) {
		super(props);

		// Note: Refs gives us the accessibility to directly access the DOM nodes within React
		// Step1: In this we will create a property in which we want to store our Element Reference "ref" value.
		// In this case, it is "cbRef"
		this.cbRef = null;

		// Step2: Create a property method which will set the cbRef value for us.
		this.setRef = (element) => {
			this.cbRef = element;
		};
	}

	componentDidMount() {
		if (this.cbRef) {
			// Since we are directly assigning the element we dont need to use current to access elements properties using callback refs.
			this.cbRef.focus();
		}
	}
	a;

	render() {
		return (
			<div>
				<h1>CallBackRef Demo</h1>
				{/* Step3: Assign the "setRef" value to the Reserved "ref" named attribute.
				This "setRef" which we assigned to ref attribute is a function which
				will set the value of property cbRef of this element */}
				<input type="text" ref={this.setRef} />
			</div>
		);
	}
}

export default CallBackRefDemo;
