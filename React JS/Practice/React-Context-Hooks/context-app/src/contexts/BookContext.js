import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = React.createContext();

function BookContextProvider(props) {
	const [books, setBooks] = useState([
		{ title: "Name of the Wind", id: uuid() },
		{ title: "The Way of Kings", id: uuid() },
		{ title: "The Final Empire", id: uuid() },
		{ title: "The Hero of Ages", id: uuid() },
	]);
	return (
		<BookContext.Provider value={{ bookList: books }}>
			{props.children}
		</BookContext.Provider>
	);
}

export default BookContextProvider;
