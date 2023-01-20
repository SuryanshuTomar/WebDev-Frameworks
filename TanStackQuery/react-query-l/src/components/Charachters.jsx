import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import RickMortyFetch from "../axios/RickMortyFetch";
import SingleCharachter from "./SingleCharachter";

function Charachters() {
	const [page, setPage] = useState(1);

	const fetchCharachers = async (keys) => {
		const { queryKey } = keys;
		const response = await RickMortyFetch(`/character?page=${queryKey[1]}`);
		return response.data;
	};

	const {
		data: charachtersData,
		status,
		isLoading,
		isError,
		isPreviousData,
	} = useQuery(["charachters", page], fetchCharachers, {
		keepPreviousData: true, // this will cache the previous data which will help us in replacing it will new data
	});

	// Alternative to check if the data is loading or the fetch request throws error from react query
	// if (status === "loading") {
	// 	return <div>Loading Data...</div>;
	// }
	// if (status === "error") {
	// 	return <div>Something Went Wrong!!!</div>;
	// }

	if (isLoading) {
		return <h2 style={{ color: "white" }}>Loading Data...</h2>;
	}
	if (isError) {
		return <h2 style={{ color: "white" }}>Something Went Wrong!!!</h2>;
	}

	// console.log(charachtersData);
	// console.log(page);
	return (
		<>
			<h2 style={{ color: "white" }}>Current Page : {page}</h2> <br />
			<div className="characters">
				{charachtersData.results.map((character) => (
					<SingleCharachter key={character.id} character={character} />
				))}
			</div>
			<div>
				{/* Alternate buttons */}
				{/* {charachtersData.info.prev && (
					<button onClick={() => setPage((page) => page - 1)}>
						Prev Page
					</button>
				)}
				{charachtersData.info.next && (
					<button onClick={() => setPage((page) => page + 1)}>
						Next Page
					</button>
				)} */}

				<button
					disabled={isPreviousData || !charachtersData.info.prev}
					onClick={() => setPage((page) => page - 1)}
				>
					Prev Page
				</button>
				<button
					disabled={isPreviousData || !charachtersData.info.next}
					onClick={() => setPage((page) => page + 1)}
				>
					Next Page
				</button>
			</div>
		</>
	);
}

export default Charachters;
