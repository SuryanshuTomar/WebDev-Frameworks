import React, { useState, useEffect } from "react";

// Custom Hook for fetching data
export function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async (url) => {
			const response = await fetch(url);
			const resData = await response.json();
			setData(resData);
		};
		fetchData(url);
	}, [url]);
	return { data };
}
