import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
	return (
		<>
			<Header />
			<div className="App">
				<CartContextProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</CartContextProvider>
			</div>
		</>
	);
}

export default App;
