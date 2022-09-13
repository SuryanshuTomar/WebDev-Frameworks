import React, { PureComponent } from "react";

class PureComp extends PureComponent {
	render() {
		console.log("*****Pure Component Render******");
		return (
			<div>
				<p>
					1. A Pure Component does implement the shouldComponentUpdate()
					method with a shallow props and state comparison. <br />
					2. It does the shallow comparison of prevState with currentState
					and prevProps with currentProps. Then check if there is any
					difference between them and if there is a difference the it will
					return true which will cause the component to re-render otherwise
					it will return false. <br />
					3. Pure Component prevents any unnecessary re-renders which will
					give our app performance boost. <br />
					4. Other thing we need to keep in mind that, we should not mutate
					the object and array state variable because if we mutate then
					since PureComponent only does the shallow comparison of the
					states and props it will not find any changes in the refernces of
					the object variables inside the shouldComponentUpdate() method
					comparison since reference of the objects and array are stored in
					those variable and they not change if we mutate them which will
					ultimately prevent our component to re-render. Therefore, always
					return a new object that reflects the new state.
				</p>
				<h2>PureComponent {this.props.name}</h2>
			</div>
		);
	}
}

export default PureComp;
