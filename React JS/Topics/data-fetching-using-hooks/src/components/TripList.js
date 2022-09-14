import React, { useEffect, useState } from "react";
import "./TripList.css";

function TripList() {
	const [trips, setTrips] = useState([]);
	const [url, setUrl] = useState("http://localhost:3000/trips");

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setTrips(data))
			.catch((err) => console.log(err));
	}, [url]);

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
				{trips.map((trip) => {
					return (
						<li key={trip.id}>
							<h3>Name: {trip.title}</h3>
							<p>Price: {trip.price}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TripList;
