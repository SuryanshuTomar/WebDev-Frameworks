import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

function BookForm() {
	const { dispatchBook } = useContext(BookContext);
	const [bookForm, setBookForm] = useState({ title: "", author: "" });

	const submitHandler = (event) => {
		event.preventDefault();
		dispatchBook({
			type: "ADD_BOOK",
			book: { title: bookForm.title, author: bookForm.author },
		});
		setBookForm({ title: "", author: "" });
	};

	const formHandler = (event) => {
		setBookForm((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="title">Book Title : </label>
			<input
				type="text"
				id="title"
				name="title"
				placeholder="Enter Book Name"
				value={bookForm.title}
				onChange={formHandler}
				required
			/>{" "}
			<br />
			<label htmlFor="author">Book Author: </label>
			<input
				type="text"
				id="author"
				name="author"
				placeholder="Enter Author Name"
				value={bookForm.author}
				onChange={formHandler}
				required
			/>{" "}
			<br />
			<input type="submit" value="Add Book" />
			<br />
		</form>
	);
}

export default BookForm;
