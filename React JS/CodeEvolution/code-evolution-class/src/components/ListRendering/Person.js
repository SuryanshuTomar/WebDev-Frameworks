import React, { Component } from "react";

export class Person extends Component {
	render() {
		return (
			< >
				<h3>Name: {this.props.person.name}</h3>
				<h5>Skill: {this.props.person.skill}</h5>
				<h5>Age: {this.props.person.age}</h5>
			</>
		);
	}
}

export default Person;
