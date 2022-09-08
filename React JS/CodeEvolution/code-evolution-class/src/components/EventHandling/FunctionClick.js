import React, { Component } from "react";

class FunctionClick extends Component {
	clickHandler() {
		console.log("Button Clicked");
	}

	render() {
		return (
			<div>
				{/* Here clickHandler is an EventHandler. And EventHandler take functions as values and not function calls. Because eventHandler will execute whenever and event is triggered. But if we pass the function call (in this case clickHandler()) then the clickHandler function will be executed even without the event and will not work when the even is triggered */}
				<button onClick={this.clickHandler}>Click Me!</button>
			</div>
		);
	}
}

export default FunctionClick;
