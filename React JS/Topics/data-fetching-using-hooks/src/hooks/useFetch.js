import { useState, useEffect } from "react";

// Custom Hook for fetching data
export function useFetch(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async (url) => {
			setIsPending(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const resData = await response.json();
				setData(resData);
				setError(null);
				setIsPending(false);
			} catch (err) {
				console.log(err.message);
				setError("Could Not fetch the data");
				setIsPending(false);
			}
		};
		fetchData(url);
	}, [url]);
	return { data, isPending, error };
}
