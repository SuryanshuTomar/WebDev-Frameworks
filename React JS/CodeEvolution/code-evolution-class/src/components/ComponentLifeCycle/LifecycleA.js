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

	shouldComponentUpdate(nextProps, nextState) {
		console.log("LifecycleA shouldComponentUpdate method called...");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, nextState) {
		console.log("LifecycleA getSnapshotBeforeUpdate method called...");
		return true;
	}

	componentDidUpdate(prevProps, nextState, snapShotValue) {
		console.log("LifecycleA componentDidUpdate method called...");
	}

	componentDidMount() {
		console.log("LifecycleA componentDidMount method called...");
	}

	componentWillUnmount() {
		console.log("LifecycleA componentWillUnmount method called...");
	}

	clickHandler = () => {
		this.setState({ name: "DeathSlayer" });
	};

	render() {
		console.log("LifecycleA render method called...");
		return (
			<div>
				<h1>LifeCycleA</h1>
				<LifecycleB />

				<button onClick={this.clickHandler}>Click To Change Name</button>
			</div>
		);
	}
}

export default LifecycleA;
