import React, { Component } from "react";

export class LifecycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Death",
		};

		console.log("LifecycleB Constructor called...");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleB getDerivedStateFromProps method called...");
		return null;
	}

	componentDidMount() {
		console.log("LifecycleB componentDidMount method called...");
	}

	render() {
		console.log("LifecycleB render method called...");
		return <div>LifecycleB</div>;
	}
}

export default LifecycleB;
