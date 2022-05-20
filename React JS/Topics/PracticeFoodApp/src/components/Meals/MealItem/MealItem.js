import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import Classes from "./MealItem.module.css";

const MealItem = (props) => {
	const cartContext = useContext(CartContext);

	const price = `$ ${props.price.toFixed(2)}`;

	const addToCartHandler = (enteredAmount) => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			amount: enteredAmount,
			price: props.price,
		});
	};

	return (
		<li className={Classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={Classes.description}>{props.description}</div>
				<div className={Classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} id={props.id} />
			</div>
		</li>
	);
};

export default MealItem;
