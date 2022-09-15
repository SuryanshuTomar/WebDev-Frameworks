import "./App.css";
import { useState } from "react";
import TripList from "./components/TripList";

function App() {
	const [showTrips, setShowtTrip] = useState(true);
	return (
		<div className="App">
			<button onClick={() => setShowtTrip(!showTrips)}>
				Toggle Trips Visibility
			</button>
			{showTrips && <TripList />}
		</div>
	);
}

export default App;
