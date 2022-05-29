import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import SingleProduct from "./SingleProduct";

const Cart = () => {
	const { cart } = useContext(CartContext);
	const totalPrice = useMemo(
		() => cart.reduce((acc, cartItem) => (acc += +cartItem.price), 0),
		[cart]
	);

	return (
		<div>
			<h2>Cart Items</h2>
			<h3>Cart Total : {totalPrice} Rs </h3>
			<div className="productsContainer">
				<SingleProduct products={cart} />
			</div>
		</div>
	);
};

export default Cart;
