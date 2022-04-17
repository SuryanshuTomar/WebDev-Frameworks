import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchMoviesHandler() {
		setIsLoading(true);
		setError(null);

		// Fetching Data -
		try {
			const response = await fetch("http://swapi.dev/api/films");

			if (!response.ok) {
				throw new Error("Something Went Wrong !!");
			}

			const data = await response.json();
			const trasformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseData: movieData.release_date,
				};
			});

			setMovies(trasformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && !error && <p>Found No Movies !</p>}
				{!isLoading && error && <p>{error}</p>}
				{isLoading && <p>Fetching Movies....</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
