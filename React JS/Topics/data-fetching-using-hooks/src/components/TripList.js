import React, { useEffect, useState } from "react";
import "./TripList.css";

function TripList() {
	const [trips, setTrips] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/trips")
			.then((response) => response.json())
			.then((data) => setTrips(data))
			.catch((err) => console.log(err));
	}, [trips]);

	return (
		<div className="trip-list">
			<h1>TRIP LIST</h1>
			<hr />
			<ul>
				{trips.map((trip) => {
					return (
						<li key={trip.title}>
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
