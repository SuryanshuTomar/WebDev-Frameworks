"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.info(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong! : </h2>
			<p>{error.message}</p>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	);
}

export default Error;
