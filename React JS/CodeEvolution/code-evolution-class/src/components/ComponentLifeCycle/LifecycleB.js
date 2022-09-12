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

	shouldComponentUpdate(nextProps, nextState) {
		console.log("LifecycleB shouldComponentUpdate method called...");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, nextState) {
		console.log("LifecycleB getSnapshotBeforeUpdate method called...");
		return true;
	}

	componentDidUpdate(prevProps, nextState, snapShotValue) {
		console.log("LifecycleB componentDidUpdate method called...");
	}

	componentDidMount() {
		console.log("LifecycleB componentDidMount method called...");
	}

	componentWillUnmount() {
		console.log("LifecycleB componentWillUnmount method called...");
	}

	render() {
		console.log("LifecycleB render method called...");
		return <div>LifecycleB</div>;
	}
}

export default LifecycleB;
