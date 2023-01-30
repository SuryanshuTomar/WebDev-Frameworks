import React, { useState } from "react";
import AboutUseQuery from "./AboutUseQuery";
import PostListOne from "./PostListOne";
import PostListTwo from "./PostListTwo";
import { getPost } from "../../api/posts";
import { useQueryClient } from "@tanstack/react-query";
import PreFetchedPost from "./PreFetchedPost";

function MainQuery() {
	const queryClient = useQueryClient();

	const [currentPage, setCurrentPage] = useState(<PostListOne />);
	const [post, setPost] = useState(null);

	const pageHandler = (page) => {
		if (page === 1) setCurrentPage(<PostListOne />);
		else if (page === 2) setCurrentPage(<PostListTwo />);
	};

	const handleMouseHover = () => {
		// Pre Fetching the data
		const query = queryClient.prefetchQuery({
			queryKey: ["posts", 1],
			queryFn: () => getPost(1),
		});
	};

	const handleMouseClick = () => {
		// Manually setting/priming the data for a prefetched query
		// queryClient.setQueryData(["posts, 1"], getPost(1)).then((data) => {
		// 	console.log(data);
		// 	setPost(data);
		// });

		const data = queryClient.getQueryData(["posts", 1]);
		setPost(data);
	};

	return (
		<div>
			{/* About UseQuery */}
			<AboutUseQuery />

			{/* Posts Lists */}
			{/* <button onClick={() => pageHandler(1)}>Post List 1</button>
			<button onClick={() => pageHandler(2)}>Post List 2</button>
			<br />
			<br />
			{currentPage} */}

			{/* Prefetching Data */}
			{/* <h5>Hover the below button to prefetch the post</h5>
			<button onMouseEnter={handleMouseHover} onClick={handleMouseClick}>
				PrefetchPost
			</button>
			<br />
			<br />
			<PreFetchedPost post={post} /> */}
		</div>
	);
}

export default MainQuery;
