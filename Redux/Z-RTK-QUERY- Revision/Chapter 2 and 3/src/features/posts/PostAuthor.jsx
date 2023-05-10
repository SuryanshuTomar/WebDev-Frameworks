import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
	const users = useSelector(selectAllUsers);

	// finding user for the current post
	const author = users.find((user) => user.id === userId);

	return <span>by {author?.name ?? "Unknown Author"}</span>;
};
export default PostAuthor;
