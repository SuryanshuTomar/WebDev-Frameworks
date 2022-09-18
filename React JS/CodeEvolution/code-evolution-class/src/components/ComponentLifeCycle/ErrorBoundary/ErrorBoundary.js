import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	// Implementing the Error Boundary
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
		};
	}

	// Implemented to Log errors and infos
	componentDidCatch(error, info) {
		console.error(error);
		console.info(info);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went Wrong!!</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
