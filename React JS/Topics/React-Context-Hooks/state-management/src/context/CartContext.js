import React, { useState, createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const cartReducer = (currentState, action) => {
	switch (action.type) {
		case "ADDTOCART":
			return [...currentState, action.product];
		case "REMOVEFROMCART":
			return currentState.filter(
				(cartItem) => cartItem.id !== action.product.id
			);
		default:
			return currentState;
	}
};

const CartContextProvider = ({ children }) => {
	const [cart, dispatchCart] = useReducer(cartReducer, initialState);
	// const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart, dispatchCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
