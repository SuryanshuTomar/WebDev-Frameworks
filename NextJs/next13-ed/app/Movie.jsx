// imports
import Image from "next/image";
import Link from "next/link";

function Movie({ movie }) {
	const { id, title, poster_path, release_date } = movie;
	const imagePath = "https://image.tmdb.org/t/p/original";

	return (
		<div className="border-2 rounded-lg border-white p-2 text-center">
			<h1>{title}</h1>
			<Link href={`/${id}`}>
				<Image
					className="rounded-lg"
					src={imagePath + poster_path}
					alt={title}
					width={800}
					height={800}
				/>
			</Link>
			<h2>Release Date : {release_date}</h2>
		</div>
	);
}
export default Movie;
