"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	);
}

export default Error;
