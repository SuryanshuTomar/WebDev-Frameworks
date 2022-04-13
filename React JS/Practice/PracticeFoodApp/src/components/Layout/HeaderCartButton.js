import React, { useContext, useEffect, useState } from "react";

import Classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
	// HeaderCartButton component will be re-evaluated whenever the value of CartContext is changed
	const cartContext = useContext(CartContext);

	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

	const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);

	const btnClasses = `${Classes.button} ${
		btnIsHighlighted ? Classes.bump : ""
	}`;

	useEffect(() => {
		if (cartContext.items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [cartContext.items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={Classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={Classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
