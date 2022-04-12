import React, { useContext } from "react";

import Classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
	// HeaderCartButton component will be re-evaluated whenever the value of CartContext is changed
	const cartContext = useContext(CartContext);

	const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);

	return (
		<button className={Classes.button} onClick={props.onClick}>
			<span className={Classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={Classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
