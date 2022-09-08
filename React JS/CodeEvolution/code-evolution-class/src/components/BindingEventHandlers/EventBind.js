import React, { Component } from "react";

class EventBind extends Component {
	constructor() {
		super();
		this.state = {
			message: "Hello",
		};

		// Binding for - 3.
		// Binding the "this" keyword in the constructor iteself for the third way.
		// And because binding in the constructor happens only once so this method is more efficient
		// than the other two because in the other method every timeevent is triggered the binding of the "this" will also take place.
		this.clickHandler = this.clickHandler.bind(this);
	}

	// Method For - 1, 2 and 3
	// clickHandler() {
	// 	Because of "this" keyword we cannot directly call the clickHandler because the value of
	//    "this" will change in this scope is undefined
	// 	When a function has been used as a high order function (passed as an argument) they lose
	//    their awareness of this, even if they are in the same object.
	// 	console.log(this);
	// 	this.setState({ message: "GoodBye" });
	// }

	// Binding for - 4
	// Fourth and the best option to bind the "this" keyword is to make the EventHandler method an arrow function. This way the EventHandler function will always consider the "this" value of its outer scope which is the "this" of the class itself.
	clickHandler = () => {
		this.setState({ message: "GoodBye" });
	};

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>

				{/* Four Methods to Bind the "this" to an EventHandler are - 
            1. Using the bind() method in the render() method
            2. Using the arrow function in the render() method
            3. Binding the Event Handler method in the constructor
            4. Making the Event Handler method itself the arrow function */}

				{/* Binding For 1 */}
				{/* One Way to bind "this" keyword */}
				{/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

				{/* Binding For 2 */}
				{/* Second Way to bind "this" keyword */}
				{/* <button onClick={() => this.clickHandler()}>Click</button> */}

				{/* Third Way to bind "this" keyword */}
				{/* <button onClick={this.clickHandler}>Click</button> */}

				{/* Fourth Way to bind "this" keyword -> Recommended Method */}
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default EventBind;
