import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import { Products } from "./components/Products";
import { New } from "./components/New";
import { Featured } from "./components/Featured";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				{/* Relative Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/order-summary" element={<OrderSummary />} />

				<Route path="products" element={<Products />}>
					{/* Index Route */}
					<Route index element={<Featured />} />
					{/* Nested Routes */}
					<Route path="new" element={<New />} />
					<Route path="featured" element={<Featured />} />
				</Route>

				{/* Dynamic Routes */}
				<Route path="users" element={<Users />}>
					<Route path=":userId" element={<UserDetails />} />
					<Route path="admin" element={<Admin />} />
				</Route>

				{/* Not Found */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
