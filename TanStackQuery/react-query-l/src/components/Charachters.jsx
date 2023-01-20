import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import RickMortyFetch from "../axios/RickMortyFetch";
import SingleCharachter from "./SingleCharachter";

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
		<div className="characters">
			{charachtersData.results.map((character) => (
				<SingleCharachter key={character.id} character={character} />
			))}
		</div>
	);
}

export default Charachters;
