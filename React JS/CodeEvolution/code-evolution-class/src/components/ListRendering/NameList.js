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

		const names2 = ["Iron Man", "Spider Man", "Black Widow"];

		return (
			<div>
				{names.map((hero) => (
					<h3 key={hero.heroName}>{hero.heroName}</h3>
				))}
				<div>
					<hr />
					<h2>Hero Details : </h2>
					{persons.map((person) => (
						// A "key" is special string attribute we need to include when creating lists of element
						// Keys give the elements a stable identity, provided that the key values are unique.
						// Keys help React indetify which items have changed, have added, or are removed
						// It also helps in efficient update of the user interface.
						// Key cannot be passed as "key" props.
						// If we want to pass key props then we have to pass the key props as different name.
						<Person person={person} key={person.id} />
					))}
				</div>

				<hr />
				<div>
					{names2.map((heroName, index) => (
						<h2 key={index}>{heroName}</h2>
						/* Note: Index as Key is a Anti-Pattern.
						 Because If we use index as key props and try to insert the value at the start of the names2 list(array), then react will insert a new list item with a key value of index = 0 till 3, but now react will see that it already have value for index value 0, 1 and 2 and reuse their values and the value which was to be inserted at the start of the list i.e. - index = 0(key) will not be inserted and is now overriden with the old value of index=0 and the index=3 value will now be empty.
						 The same scenerio will happen if we perform any CRUD operation on the list or try to perform any rearranging operation like sorting.

                  When can we use Index as key ?
                  1. The items in your list do not have a unique ID.
                  2. The list is a static list and will not change.
                  3. The list will never be reordered or filtered. */
					))}
				</div>
			</div>
		);
	}
}

export default NameList;
