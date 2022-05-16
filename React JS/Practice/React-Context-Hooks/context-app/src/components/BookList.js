import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

function BookList() {
	const { bookList } = useContext(BookContext);
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			className="book-list"
			style={{ backgroundColor: theme.bg, color: theme.syntax }}
		>
			<ul>
				{bookList.map((book) => (
					<li key={book.id} style={{ background: theme.ui }}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default BookList;
