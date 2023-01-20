import React, { useState, useEffect } from "react";
import RickMortyFetch from "../axios/RickMortyFetch";

function Charachters() {
	const [characters, setCharachters] = useState([]);

	const fetchCharachers = async () => {
		try {
			const response = await RickMortyFetch("/character");
			setCharachters(response.data.results);
			console.log(response.data.results);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchCharachers();
	}, []);

	return (
		<div>
			{characters.map((character) => (
				<h3 key={character.id}>{character.name}</h3>
			))}
		</div>
	);
}

export default Charachters;
