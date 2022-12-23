import React from "react";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, calculateTotals } from "../features/cart/cartSlice";

function CartContainer() {
	const dispatch = useDispatch();
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
				<button
					className="btn clear-btn"
					onClick={() => dispatch(clearCart())}
				>
					Clear Cart
				</button>
			</footer>
		</section>
	);
}

export default CartContainer;
