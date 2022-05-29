import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const SingleProduct = ({ products }) => {
	const { cart, dispatchCart } = useContext(CartContext);

	// const addToCartHandler = (product) => {
	// 	setCart([...cart, product]);
	// };

	// const removeFromCartHandler = (product) => {
	// 	setCart(cart.filter((cartItem) => cartItem.id !== product.id));
	// };
	console.log(cart);
	return (
		<>
			{products.map((product) => (
				<div className="productsCard" key={product.id}>
					<div
						className="image"
						style={{ backgroundImage: `url(${product.image})` }}
					>
						<h4>{product.name}</h4>
					</div>
					<div className="content">
						<p>Price : {product.price}</p>
						{cart.includes(product) ? (
							<button
								onClick={() =>
									dispatchCart({ type: "REMOVEFROMCART", product })
								}
							>
								Remove From Cart
							</button>
						) : (
							<button
								onClick={() =>
									dispatchCart({ type: "ADDTOCART", product })
								}
							>
								Add To Cart
							</button>
						)}
					</div>
				</div>
			))}
		</>
	);
};

export default SingleProduct;
