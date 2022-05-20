import React, { useState } from "react";

import CartProvider from "./store/CartProvider";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const [cartIsShown, setCartIsShow] = useState(false);

	const showCartHandler = () => {
		setCartIsShow(true);
	};
	const hideCartHandler = () => {
		setCartIsShow(false);
	};

	return (
		<React.Fragment>
			<CartProvider>
				{cartIsShown && <Cart onHideCart={hideCartHandler} />}
				<Header onShowCart={showCartHandler} />
				<main>
					<Meals />
				</main>
			</CartProvider>
		</React.Fragment>
	);
}

export default App;
