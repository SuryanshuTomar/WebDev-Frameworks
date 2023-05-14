import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectAllPosts,
	getPostsStatus,
	getPostsError,
	fetchPosts,
} from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
	const dispatch = useDispatch();

	// selecting the posts feature state from the store state
	// const posts = useSelector((storeState) => storeState.posts);

	// feature specific selector created in the featureSlice => postSlice iteself.
	// const posts = useSelector((storeState) => selectAllPosts(storeState));
	// or
	// In this, the storeState will be passed automatically to the selectAllPosts selector function automatically as argument
	const posts = useSelector(selectAllPosts);
	const postsStatus = useSelector(getPostsStatus);
	const postsError = useSelector(getPostsError);

	// fetch posts from api
	useEffect(() => {
		if (postsStatus === "idle") {
			dispatch(fetchPosts());
		}
	}, [postsStatus, dispatch]);

	// // sorting posts
	// const orderedPosts = posts
	// 	.slice() // this is returning a shallow copy of the posts which will then be sorted and stored into the orderedPosts
	// 	.sort((a, b) => b.date.localeCompare(a.date));

	// // post rendering function
	// const renderedPosts = orderedPosts.map((post) => (
	// 	<PostsExcerpt key={post.id} post={post} />
	// ));

	// replacement code for the sorting posts and post rendering function
	let content;
	if (postsStatus === "loading") {
		content = <p>Loading...</p>;
	} else if (postsStatus === "succeeded") {
		const orderedPosts = posts
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date));

		content = orderedPosts.map((post) => (
			<PostsExcerpt key={Math.random() * new Date().getTime()} post={post} />
		));
	} else if (postsStatus === "failed") {
		content = <p>{postsError}</p>;
	}

	return (
		<section>
			<h2>Posts</h2>
			{/* {renderedPosts} */}
			{content}
		</section>
	);
};
export default PostsList;
