import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function Navbar() {
	const { bookList } = useContext(BookContext);
	return (
		<div className="navbar">
			<h1>Alex Reading List</h1>
			<p>Currently you have {bookList.length} books to get through...</p>
		</div>
	);
}

export default Navbar;
