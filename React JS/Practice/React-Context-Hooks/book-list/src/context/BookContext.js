import React, { useState, createContext, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

function BookContextProvider(props) {
	const [bookList, dispatchBook] = useReducer(BookReducer, [
		{ title: "The Bhagvad Gita", author: "Lord Krishna", id: uuid() },
		{ title: "The Final Empire", author: "Brandon Sanderson", id: uuid() },
		{ title: "Name of the Wind", author: "Patrick Rothfuss", id: uuid() },
	]);

	return (
		<BookContext.Provider value={{ bookList, dispatchBook }}>
			{props.children}
		</BookContext.Provider>
	);
}

export default BookContextProvider;
