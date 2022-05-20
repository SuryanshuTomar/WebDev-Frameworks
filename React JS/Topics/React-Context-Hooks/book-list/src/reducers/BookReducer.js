import { v4 as uuid } from "uuid";

export function BookReducer(bookState, action) {
	switch (action.type) {
		case "ADD_BOOK":
			return [
				...bookState,
				{
					title: action.book.title,
					author: action.book.author,
					id: uuid(),
				},
			];
		case "REMOVE_BOOK":
			return bookState.filter((book) => book.id !== action.id);

		default:
			return bookState;
	}
}
