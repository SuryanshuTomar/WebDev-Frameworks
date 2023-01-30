import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";

function PostListTwo() {
	const postTwoQuery = useQuery({
		queryKey: ["postTwo"],
		queryFn: getPosts,
	});

	if (postTwoQuery.isLoading) return <h4>Loading Posts List 2...</h4>;
	if (postTwoQuery.isError)
		return <pre>{JSON.stringify(postTwoQuery.error)}</pre>;

	return (
		<div>
			<h3>Post List 2</h3>
			<ol>
				{postTwoQuery.data
					.map((post) => <li key={post.id}>{post.title}</li>)
					.slice(-5)}
			</ol>
		</div>
	);
}

export default PostListTwo;
