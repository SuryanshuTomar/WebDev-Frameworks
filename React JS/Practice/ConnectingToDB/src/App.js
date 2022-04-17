import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchMoviesHandler() {
		setIsLoading(true);
		const response = await fetch("http://swapi.dev/api/films");
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
		setIsLoading(false);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && <p>Found No Movies !</p>}
				{isLoading && <p>Fetching Movies....</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
