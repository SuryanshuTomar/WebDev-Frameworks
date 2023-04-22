// imports
import Movie from "./Movie";
import styles from "./page.module.css";

// https://api.themoviedb.org/3/movie/popular
export default async function Home() {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular/?api_key=${process.env.API_KEY}`
	);
	const res = await data.json();
	console.log(res);

	return (
		<main>
			<h1 className={"text-xl"}>Popular Movies</h1>
			<br />
			<div className="grid gap-16 grid-cols-fluid">
				{res.results.map((movie) => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>
		</main>
	);
}
