import React, { Component } from "react";

class Hero extends Component {
	render() {
		if (this.props.heroName === "Joker") {
			throw new Error("Not a Hero!!");
		}
		return <div>{this.props.heroName}</div>;
	}
}

export default Hero;
 