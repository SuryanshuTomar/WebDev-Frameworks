import React, { useEffect, useState, useCallback } from "react";
import "./TripList.css";
import { useFetch } from "../hooks/useFetch";

function TripList() {
	const [url, setUrl] = useState("http://localhost:3000/trips");

	const { data: trips, isPending, error } = useFetch(url);
	// setTrips(data);

	// const fetchTrips = useCallback(async () => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	setTrips(data);
	// }, [url]);

	// useEffect(() => {
	// 	fetchTrips();
	// }, [fetchTrips]);

	return (
		<div className="trip-list">
			<h1>TRIP LIST</h1>
			<hr />
			<div className="filters">
				<button
					onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
				>
					European Trips
				</button>
				<button
					onClick={() => setUrl("http://localhost:3000/trips?loc=america")}
				>
					American Trips
				</button>
				<button onClick={() => setUrl("http://localhost:3000/trips")}>
					All Trips
				</button>
			</div>
			<hr />
			<ul>
				{trips?.map((trip) => {
					return (
						<li key={trip.id}>
							<h3>Name: {trip.title}</h3>
							<p>Price: {trip.price}</p>
						</li>
					);
				})}
				{isPending && <h1>Loading Trips....</h1>}
				{error && <h1>Something went wrong 😞</h1>}
			</ul>
		</div>
	);
}

export default TripList;
