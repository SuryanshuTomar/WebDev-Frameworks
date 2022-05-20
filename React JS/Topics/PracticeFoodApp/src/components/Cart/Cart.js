import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

import Classes from "./Cart.module.css";

const Cart = (props) => {
	const cartContext = useContext(CartContext);

	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartContext.addItem(item);
	};
	const cartItemRemoveHandler = (id) => {
		cartContext.removeItem(id);
	};

	const cartItems = (
		<ul className={Classes["cart-items"]}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onHideCart}>
			{cartItems}
			<div className={Classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={Classes.actions}>
				<button
					className={Classes["button--alt"]}
					onClick={props.onHideCart}
				>
					Close
				</button>
				{hasItems && <button className={Classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
