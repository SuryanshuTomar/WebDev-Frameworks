import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts";

function PostListOne() {
	const postOneQuery = useQuery({
		queryKey: ["postOne"],
		queryFn: getPosts,
		// enabled: true
		// staleTime: 1000,
		// refetchInterval: 1000,
	});

	if (postOneQuery.isLoading) return <h4>Loading Posts List 1...</h4>;
	if (postOneQuery.isError)
		return <pre>{JSON.stringify(postOneQuery.error)}</pre>;

	return (
		<div>
			<h3>Post List 1</h3>
			<ol>
				{postOneQuery.data
					.map((post) => <li key={post.id}>{post.title}</li>)
					.slice(0, 5)}
			</ol>
		</div>
	);
}

export default PostListOne;
