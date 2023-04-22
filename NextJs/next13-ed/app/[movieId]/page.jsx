// imports
import Image from "next/image";

async function MovieDetail({ params }) {
	const { movieId } = params;
	console.log(movieId);

	const imagePath = "https://image.tmdb.org/t/p/original";
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
	);

	const res = await data.json();
	console.log(res);

	return (
		<div>
			<h2 className="text-2xl">Title : {res.title}</h2>
			<h2 className="text-lg">Release Date : {res.release_date}</h2>
			<h2 className="text-lg">Runtime : {res.runtime} minutes</h2>
			<h2 className="text-lg bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
				{res.status}
			</h2>

			<Image
				className="my-12 w-full"
				src={imagePath + res.backdrop_path}
				height={1000}
				width={1000}
			/>
			<h2 className="text-2xl my-4">Movie Overview : </h2>
			<h2 className="text-lg">{res.overview}</h2>
		</div>
	);
}

export default MovieDetail;
