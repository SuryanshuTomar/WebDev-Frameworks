import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
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
import { Profile } from "./components/Profile";
import AuthContextProvider from "./components/Auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";

// This is a Dynamic Import
// A promise is return by this dynamic import which is then converted into a module that contains a default exported React Component. In this case its About Component
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Navbar />
				<Routes>
					{/* Relative Routes */}
					<Route path="/" element={<Home />} />
					<Route
						path="/about"
						element={
							// Using React Suspense to provide a fallback UI whenever the LazyAbout Component Starts Loading....
							<React.Suspense fallback="Loading....">
								<LazyAbout />
							</React.Suspense>
						}
					/>
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

					{/* Protected Routes */}

					<Route
						path="profile"
						element={
							<RequireAuth>
								<Profile />
							</RequireAuth>
						}
					></Route>
					<Route path="login" element={<Login />} />

					{/* Not Found */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
