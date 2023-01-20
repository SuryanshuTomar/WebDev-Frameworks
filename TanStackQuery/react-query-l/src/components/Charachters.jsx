import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import RickMortyFetch from "../axios/RickMortyFetch";

function Charachters() {
	const fetchCharachers = async () => {
		const response = await RickMortyFetch("/character");

		return response.data;
	};

	const { data: charachtersData, status } = useQuery(
		"charachters",
		fetchCharachers
	);

	if (status === "loading") {
		return <div>Loading Data...</div>;
	}
	if (status === "error") {
		return <div>Something Went Wrong!!!</div>;
	}

	return (
		<div>
			{charachtersData.results.map((character) => (
				<h3 key={character.id}>{character.name}</h3>
			))}
		</div>
	);
}

export default Charachters;
