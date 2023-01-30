import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { v1 as uuid } from "uuid";

const posts = [
	{ id: 1, title: "Post 1" },
	{ id: 2, title: "Post 2" },
];

let postNumber = 3;

// async simulation function
function wait(duration) {
	return new Promise((resolve) => setTimeout(resolve, duration));
}

function Basics() {
	// Tanstack React Query useQueryClient hook
	// This hook will get the queryClient which we created and passed down through
	// the QueryClientProvider to our APP in main.jsx
	const queryClient = useQueryClient();

	// Tanstack React Query useQuery hook
	// It takes an object with 2 required key-value pair
	// DOC - https://react-query-v3.tanstack.com/reference/useQuery
	const postQuery = useQuery({
		// queryKey should be a unique value
		queryKey: ["posts"],

		// queryFn should be a function returning a promise
		queryFn: () => wait(1000).then(() => [...posts]),
	});
	// To check what are the things returned by useQuery hook
	// console.log("useQuery: ", postQuery);

	// Tanstack React Query useMutation hook
	// It takes an object with 1 require key-value pair
	// DOC - https://react-query-v3.tanstack.com/reference/useMutation
	const newPostMutation = useMutation({
		// mutationFn should be a function returning a promise
		mutationFn: (title) => wait(1000).then(posts.push({ id: uuid(), title })),

		// onSuccess function will run on success data mutation
		onSuccess: () => {
			// invalidate the old postQuery for the "posts" queryKey and
			// refetch it again after our posts is mutated
			queryClient.invalidateQueries(["posts"]);
		},
	});

	// To check what are the things returned by useQuery hook
	// console.log("useMutation: ", newPostMutation);

	const handleNewPostMutation = () => {
		// useMutation function provides us with a mutate function and
		// that allows use to pass one argument to the mutationFn in the useMutation hook
		// so when we pass title as argument in the newPostMutation.mutate(title).
		// this title will be passed as a parameter of the mutationFn in the useMutation
		newPostMutation.mutate(`Post ${postNumber++}`);
	};

	// postQuery Status returned by useQuery
	if (postQuery.isLoading) return <h3>Loading Posts...</h3>;
	if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;

	// traversing through data returned by useQuery after fetching
	return (
		<div>
			{postQuery.data.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
			<br />
			<button
				disabled={newPostMutation.isLoading}
				onClick={handleNewPostMutation}
			>
				Add New Post
			</button>
		</div>
	);
}

export default Basics;
