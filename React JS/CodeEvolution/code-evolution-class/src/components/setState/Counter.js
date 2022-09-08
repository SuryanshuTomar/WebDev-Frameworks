import React, { Component } from "react";

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	changeCounter(counterValue) {
		this.setState(
			(prevState) => ({
				count: prevState.count + counterValue,
			}),
			() => {
				console.log("Counter Value : ", this.state.count);
			}
		);
	}

	changeCounterFiveTimes(counterValue) {
		this.changeCounter(counterValue);
		this.changeCounter(counterValue);
		this.changeCounter(counterValue);
		this.changeCounter(counterValue);
		this.changeCounter(counterValue);
	}

	render() {
		return (
			<div>
				<h1>
					Counter {"->"} {this.state.count}
				</h1>
				<button onClick={() => this.changeCounter(-1)}>Count - 1</button>
				<button onClick={() => this.changeCounter(+1)}>Count + 1</button>
				<button onClick={() => this.changeCounterFiveTimes(-1)}>
					Count - 5
				</button>
				<button onClick={() => this.changeCounterFiveTimes(+1)}>
					Count + 5
				</button>
				<button onClick={() => this.changeCounter(-10)}>Count - 10</button>
				<button onClick={() => this.changeCounter(+10)}>Count + 10</button>
			</div>
		);
	}
}

export default Counter;
