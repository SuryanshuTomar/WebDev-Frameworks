import React, { Component } from "react";
import Person from "./Person";

class NameList extends Component {
	render() {
		const names = [
			{ id: 1, heroName: "Bruce" },
			{ id: 2, heroName: "Clarke" },
			{ id: 3, heroName: "Diana" },
		];
		const persons = [
			{
				id: 1,
				name: "Bruce",
				age: 30,
				skill: "React",
			},
			{
				id: 2,
				name: "Clark",
				age: 25,
				skill: "Angular",
			},
			{
				id: 3,
				name: "Diana",
				age: 28,
				skill: "Vue",
			},
		];
		return (
			<div>
				{names.map((hero) => (
					<h3 key={hero.heroName}>{hero.heroName}</h3>
				))}
				<div>
					<hr />
					<h2>Hero Details : </h2>
					{persons.map((person) => (
						<Person person={person} key={person.id} />
					))}
				</div>
			</div>
		);
	}
}

export default NameList;
