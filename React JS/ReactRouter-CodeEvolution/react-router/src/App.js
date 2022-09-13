import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="order-summary" element={<OrderSummary />} />

				<Route path="products" element={<Products />}>
					{/* Index Route*/}
					{/* It will take the path of its parent route which is "products" in
					this case. */}
					<Route index element={<FeaturedProducts />} />
					{/* Nested Routes */}
					<Route path="new" element={<NewProducts />} />
					<Route path="featured" element={<FeaturedProducts />} />
				</Route>

				<Route path="users" element={<Users />}>
					<Route path=":userId" element={<UserDetails />} />
					<Route path="admin" element={<Admin />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
