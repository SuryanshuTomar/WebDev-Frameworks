import React from "react";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

function CartContainer() {
	const { cartItems, amount, total } = useSelector((store) => store.cart);

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>Your Bag</h2>
					<h4 className="empty-cart">Is Currently Empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			<header>
				<h2>Your Bag</h2>
			</header>
			<div>
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						Total <span>${total}</span>
					</h4>
				</div>
				<button className="btn clear-btn">Clear Cart</button>
			</footer>
		</section>
	);
}

export default CartContainer;
