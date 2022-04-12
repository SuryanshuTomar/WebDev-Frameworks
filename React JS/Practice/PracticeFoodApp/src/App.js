import React, { useState } from "react";
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
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</React.Fragment>
	);
}

export default App;
