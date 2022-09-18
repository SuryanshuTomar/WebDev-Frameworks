import React, { Component } from "react";

class CounterRenderProps extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	incrementCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			// It only renders the props which has been passed to this component and pass the functions and state that are needed by the other components.
			<div>{this.props.render(this.state.count, this.incrementCount)}</div>
		);
	}
}

export default CounterRenderProps;
