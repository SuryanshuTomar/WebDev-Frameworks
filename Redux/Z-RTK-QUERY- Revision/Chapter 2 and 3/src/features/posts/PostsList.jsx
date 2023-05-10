import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
	// selecting the posts feature state from the store state
	// const posts = useSelector((storeState) => storeState.posts);

	// feature specific selector created in the featureSlice => postSlice iteself.
	// const posts = useSelector((storeState) => selectAllPosts(storeState));
	// or
	// In this, the storeState will be passed automatically to the selectAllPosts selector function automatically as argument
	const posts = useSelector(selectAllPosts);

	const orderedPosts = posts
		.slice() // this is returning a shallow copy of the posts which will then be sorted and stored into the orderedPosts
		.sort((a, b) => b.date.localeCompare(a.date));

	// post rendering function
	const renderedPosts = orderedPosts.map((post) => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
			<p className="postCredit">
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
		</article>
	));

	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	);
};
export default PostsList;
