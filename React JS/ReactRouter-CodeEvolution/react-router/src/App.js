import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="order-summary" element={<OrderSummary />} />
			</Routes>
		</div>
	);
}

export default App;
