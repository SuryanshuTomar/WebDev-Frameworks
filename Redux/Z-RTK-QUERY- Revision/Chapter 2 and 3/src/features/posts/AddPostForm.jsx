import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [userId, setUserId] = useState("");
	const [addRequestStatus, setAddRequestStatus] = useState("idle");

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);
	const onAuthorChanged = (e) => setUserId(e.target.value);

	const canSave =
		[title, content, userId].every(Boolean) && addRequestStatus === "idle";

	const users = useSelector(selectAllUsers);

	const usersOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	const onSavePostClicked = () => {
		// if (title && content) {
		// 	// in postAdded action creator, the first argument will be passed as feature state and second will be the action object in which, whatever we passes as argument in here will be attached to action object as payload property
		// 	dispatch(postAdded(title, content, userId));
		// 	setTitle("");
		// 	setContent("");
		//    setUserId("");
		// }

		// new code
		if (canSave) {
			try {
				setAddRequestStatus("pending");
				dispatch(addNewPost({ title, body: content, userId })).unwrap();
				// redux toolkit adds an unwrap() function to the returned promise and then that promises returns a new promises that either has the action.payload or it throws an error if its returns a "rejected" action, so that we can handle it here in case any error is returned using the try-catch block

				setTitle("");
				setContent("");
				setUserId("");
			} catch (error) {
				console.error("Failed to save the post", error);
			} finally {
				setAddRequestStatus("idle");
			}
		}
	};

	return (
		<section>
			<h2>Add a New Post</h2>

			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChanged}
				/>

				<label htmlFor="postAuthor">Author:</label>
				<select id="postAuthor" value={userId} onChange={onAuthorChanged}>
					<option value=""></option>
					{usersOptions}
				</select>

				<label htmlFor="postContent">Content:</label>
				<textarea
					id="postContent"
					name="postContent"
					value={content}
					onChange={onContentChanged}
				/>

				<button
					type="button"
					onClick={onSavePostClicked}
					disabled={!canSave}
				>
					Save Post
				</button>
			</form>
		</section>
	);
};
export default AddPostForm;
