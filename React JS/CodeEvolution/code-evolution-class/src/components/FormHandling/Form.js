import React, { Component } from "react";

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: "",
			comments: "",
			topic: "react",
		};
	}

	onUserNameChangeHandler = (event) => {
		this.setState(() => ({ userName: event.target.value }));
	};

	onCommentsChangeHandler = (event) => {
		this.setState({ comments: event.target.value });
	};

	onTopicChangeHandler = (event) => {
		this.setState({ topic: event.target.value });
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		console.log("Form Submitted with info: ");
		console.log(this.state.userName);
		console.log(this.state.comments);
		console.log(this.state.topic);
	};

	render() {
		return (
			<form onSubmit={this.onSubmitHandler}>
				<div>
					{/* Below are three controlled components which are created using two-way binding, as we are changing the handling the form values using react state. */}
					<label htmlFor="username">Username : </label>
					<br />
					<input
						type="text"
						id="username"
						value={this.state.userName}
						onChange={this.onUserNameChangeHandler}
					/>
					<h4>{this.state.userName}</h4>
				</div>
				<div>
					<label htmlFor="comments">Comments : </label>
					<br />
					<textarea
						id="comments"
						value={this.state.comments}
						onChange={this.onCommentsChangeHandler}
					/>
					<h4>{this.state.comments}</h4>
				</div>

				<div>
					<label htmlFor="topic">Topic</label> <br />
					<select
						name="topic"
						id="topic"
						value={this.state.topic}
						onChange={this.onTopicChangeHandler}
					>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<div>
					<br />
					{/* If there is only btn in the form then that button will automatically have a type="submit". That's why the below button is working automatically as a submit button without explicitely mentioning the type of the button */}
					<button>Submit</button>
				</div>
			</form>
		);
	}
}

export default Form;
