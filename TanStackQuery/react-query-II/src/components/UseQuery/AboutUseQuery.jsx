import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const posts = [
	{ id: 1, title: "Post 1" },
	{ id: 2, title: "Post 2" },
];

// async simulation function
function wait(duration) {
	return new Promise((resolve) => setTimeout(resolve, duration));
}

/* 

-> How to have unique key for each query for the below ?
	/posts -> ["posts"]
	/posts/1 -> ["posts", 1]
	/posts?authorId=1 -> ["posts", {authorId: 1}]
	/posts/2/comments -> ["posts", 2, "comments"]
	Note: Just divide the url components into an array of string, object, number for queryKey.

-> Important : 
1. useQuery will refetch data when -
	a. we switch between pages
	b. we unfocus and refocus the page.
	c. the internet is disconnected and reconnect again. 

2. useQuery caches the data it fetches and stores it in memory and when we
refocuses on any particular page, react-query will show us the cached data first
and then refetches the new data and then show use the updated data on the page
when it finished fetching the data.

3. Stale fetchStatus means that react-query will refetch the data again if any of the thing happens from point 1. But, if we want our data to not to got to stale fetchStatus
immediately after the fetching of data and stay fresh for some time then we can do one of the below 2 things -
	a. we can define for our whole app to go in stale fetchStatus after the provided time
	by passing the options objects to the constructor of the QueryClient in the main.jsx files where we are creating the queryClient object.
		eg- const queryClient = new QueryClien({
			defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } }
		}) 
		So, for the whole app, when we fetch the data, the fetchStatus will not go to stale
		for 5 mins and fetchStatus will be "fresh" for 5 mins
	b. we can define the staleTime options for a particular useQuery() 
		eg- const postQuery = useQuery({
			queryKey: ["posts"],
			querFn: getPosts,
			staleTime: 1000
		})
		So, the fetched postQuery data fetchStatus will not go to stale state and stay fresh for 1sec before going to fetchStatus stale 

4. We can also cause the refetching of data manually by providing one more option to the 
useQuery hook object that is refetchInterval -
	eg- const postQuery = useQuery({
		queryKey: ["posts"],
		querFn: getPosts,
		refetchInterval: 1000
	})
	It will refetch the data for us every 1 sec
	
5. We can also enable or disable the useQuery fetching by providing the enabled option to the useQuery hook object.
	eg- const postQuery = useQuery({
		queryKey: ["posts"],
		querFn: getPosts,
		enabled: false;
	})
	- we can also set the enabled key pragramatically, for eg-, only fetch the user data if the post data is already fetched otherwise not.
	eg- const postQuery = useQuery({
		queryKey: ["users"],
		querFn: getUser(postQuery.data.userId),
		enabled: postQuery?.data?.userId != null;
	})
	
6. We can also manually set the cached data for the queries using the queryClient.
	Syntax 1 - queryClientObject.setQueryData(queryKey, cache data we want to set)
	Syntax 2 - queryClientObject.setQueryData(queryKey, (oldData) => {})
	eg- const queryClient = useQueryClient();
	queryClient.setQueryData(["posts", id], {id: 1, title: "Post 1"})

7. We also provide the intialData and the placeholderData for our query.
	eg-1- const postQuery = useQuery({
		queryKey: ["users"],
		querFn: getUser(postQuery.data.userId),
		initialData: [{id: 0, title: "Initial Data"}]
	}) // our postQuery.data will be intitialData and will only be replace by fetched data
	after post.fetchStatus becomes "idle" / stale.

	eg-2- const postQuery = useQuery({
		queryKey: ["users"],
		querFn: getUser(postQuery.data.userId),
		placeholderData: [{id: 0, title: "Placeholder Data"}]
	}) // 
*/

function AboutUseQuery() {
	// Tanstack React Query useQuery hook
	// It takes an object with 2 required key-value pair
	// DOC - https://react-query-v3.tanstack.com/reference/useQuery
	const postQuery = useQuery({
		// queryKey should be a unique value
		queryKey: ["posts"],

		// queryFn should be a function returning a promise
		// queryFn takes a parameter which should be an object
		// which can be used to for dynamically fetching data or manipulate fetched data
		queryFn: (obj) => {
			// console.log(obj);
			return wait(1000).then(() => [...posts]);
		},
		// staleTime: 5000,
		// initialData: [{ id: 0, title: "Initial Data" }],
		placeholderData: [{ id: 0, title: "Placeholder Data" }],
	});
	// To check what are the things returned by useQuery hook
	// console.log("useQuery: ", postQuery);

	// Query Status
	// 1. when the component first mounts
	// postQuery.status === "loading"

	// 2. if the data comes back successfuly
	// postQuery.status === "success"

	// 3. if the data doesn't comes back
	// postQuery.status === "error "

	// Fetch status
	// 1. when useQuery is fetching/refetching the data,
	// postQuery.fetchStatus === "fetching";

	// 2. when useQuery is not doing any thing or its done fetching,
	// postQuery.fetchStatus === "idle";

	// 3. when the useQuery is interupted in the middle of fetching like lose internet connection
	// postQuery.fetchStatus === "paused";

	// postQuery Status returned by useQuery
	if (postQuery.isLoading) return <h3>Loading Posts...</h3>;
	if (postQuery.isError) return <spre>{JSON.stringify(postQuery.error)}</spre>;

	// traversing through data returned by useQuery after fetching
	return (
		<div>
			{postQuery.data.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
			<br />
		</div>
	);
}

export default AboutUseQuery;
