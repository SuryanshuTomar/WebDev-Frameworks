import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
	const { bookList } = useContext(BookContext);
	return bookList.length ? (
		<div className="book-list">
			<ul>
				{bookList.map((book) => (
					<BookDetails book={book} key={book.id} />
				))}
			</ul>
		</div>
	) : (
		<div className="empty">No books to read. Hello, free time :)</div>
	);
}

export default BookList;
