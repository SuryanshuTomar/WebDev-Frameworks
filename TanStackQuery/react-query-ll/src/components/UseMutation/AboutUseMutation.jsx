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

/*
-> Important:
1. useMutation hook provides us with a mutate function and that allows use to pass one argument to the mutationFn in the useMutation hook so when we pass title as argument in the newPostMutation.mutate(title). And this title will be passed as a parameter of the mutationFn in the useMutation
  eg- const newPostMutation = useMutation({
    mutationFn: (title) => wait(1000).then(posts.push({ id: uuid(), title })),
  });
  Syntax - 
    newPostMutation.mutate(args, {onError: cbFn, onSuccess: cbFn, onSettled: cbFn})
  Note: we have to call mutate(args) method on our mutation object to mutate our data, otherwise mutationFn won't run.

2. we can provide onSuccess, onError onSettled and onMutate option to the useMutation hook object which will run on success, error, final and before our data mutation. 
  1. onMutate take a function with 1 parameter - passedVariables (before mutateFn is executed)
  2. onSuccess take a function with 3 parameters - data, passedVariables, context. (after mutateFn is executed)
  3. onError take a function with 3 parameters - error, passedVariables, context. (after mutateFn is executed)
  4. onSettled take a function with 4 parameters - data, error, passedVariables, context.
  (works like finally, after mutateFn is executed)
    
  a. data -> success data returned from mutateFn
  b. passedVariables -> arguments passed using he newPostMutation.mutate(passedVariables) method.
  c. context -> whatever we return using the onMutate method will be accessed using this context.
  d. error -> error data returned from mutateFn
      eg- const newPostMutation = useMutation({
      mutationFn: (title) => wait(1000).then(posts.push({ id: uuid(), title })),
      onMutate: (variables) => {
        return {greet: "Hola"}
      } 
      onSuccess: (data, variables, context) => {
        console.log(context.greet)
      }
    });

3. We can also provide retry option to useMutation. It will retry to run mutationFn if its fails.
     eg- const newPostMutation = useMutation({
      mutationFn: (title) => wait(1000).then(posts.push({ id: uuid(), title })),
      retry: 3, // no of tries
    });

4. Instead of mutate(args) methods we can use mutateAsync().then().catch() which returns a promise.
*/

function AboutUseMutation() {
	const queryClient = useQueryClient();

	const postQuery = useQuery({
		queryKey: ["posts"],
		queryFn: () => wait(1000).then(() => [...posts]),
	});

	// Tanstack React Query useMutation hook
	// It takes an object with 1 require key-value pair
	// DOC - https://react-query-v3.tanstack.com/reference/useMutation
	const newPostMutation = useMutation({
		// mutationFn should be a function returning a promise
		mutationFn: (title) =>
			wait(10).then(() => {
				posts.push({ id: uuid(), title });
				return posts;
			}),

		// onSuccess function will run on successful data mutation
		onSuccess: (data, variables, context) => {
			console.log("Data: ", data);
			console.log("Context: ", context);
			// invalidate the old postQuery for the "posts" queryKey and
			// refetch it again after our posts is mutated
			// we are providing the option {exact: true}, so that it will only invalidate
			// queries that have only ["posts"] as queryKey.
			// If we don't set the {exact: true}, then queryClient will invalidate all the
			// queries whose queryKey starts with ["posts", ...]
			queryClient.invalidateQueries(["posts"], { exact: true });
		},
		onMutate: (variables) => {
			return { greetings: "Ohaiyu" };
		},
	});

	// Mutation Status
	// 1. when the mutate method gets called on the our mutation object
	// newPostMutation.status === "loading"

	// 2. if the data comes back successfuly
	// newPostMutation.status === "success"

	// 3. if the data doesn't comes back
	// newPostMutation.status === "error "

	// 4. it will be idle state until we call the mutate method on our mutation object.
	// newPostMutation.status === "idle";

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

export default AboutUseMutation;
