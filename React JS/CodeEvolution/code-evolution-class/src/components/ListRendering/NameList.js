import React, { Component } from "react";

class NameList extends Component {
	render() {
		const names = [
			{ id: 1, heroName: "Bruce" },
			{ id: 2, heroName: "Clarke" },
			{ id: 3, heroName: "Diana" },
		];
		return (
			<div>
				{names.map((hero) => (
					<h3 key={hero.heroName}>{hero.heroName}</h3>
				))}
			</div>
		);
	}
}

export default NameList;
