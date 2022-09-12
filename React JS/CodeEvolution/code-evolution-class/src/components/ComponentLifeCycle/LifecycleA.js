import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Death",
		};

		console.log("LifecycleA Constructor called...");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleA getDerivedStateFromProps method called...");
		return null;
	}

	componentDidMount() {
		console.log("LifecycleA componentDidMount method called...");
	}

	render() {
		console.log("LifecycleA render method called...");
		return (
			<div>
				<h1>LifeCycleA</h1>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
