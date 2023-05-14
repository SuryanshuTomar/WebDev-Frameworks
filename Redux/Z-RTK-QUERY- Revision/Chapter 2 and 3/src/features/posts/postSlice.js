import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

// InitialState for postSlice feature
const initialState = {
	postsData: [],
	status: "idle", // "idle" | "loading" | "succeeded" | "failed"
	error: null,
};

// Base URL to fetch data asynchronously
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// CreateAsyncThunks are middlewares that are used we need to do tasks asynchronously like fetching data.
// Format: const thunkName = createAsyncThunk("generatedActionName", payloadCreatorCallback);
// Syntax: const thunkName = createAsyncThunk("nameOfReducerDefinedInStore/fetch[dataName]", async function() {
// 	Do the async task.
// 	No need to wrap the async task in try-catch block as it is already handled by the redux toolkit
// })
// Note:
// 1. payloadCreatorCallback should return a promise that contains some rejected or resolved data.
// 2. Thunk is a programming concept where a function is used to delay the evaluation/calculation of an operation. Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	// fetch all posts
	const response = await axios.get(POSTS_URL);
	return [...response.data];
});

// async thunk action creator for creating new post and sending the data to API
export const addNewPost = createAsyncThunk(
	"posts/addNewPost",
	async (initialPost) => {
		const response = await axios.post(POSTS_URL, initialPost);
		return response.data;
	}
);

// Posts feature slice
export const postSlice = createSlice({
	// postSlice feature "name"
	name: "posts",

	// "initial state" for postSlice feature
	initialState,

	// "reducers" for postSlice feature
	reducers: {
		postAdded: {
			// prepare reducer method
			// if we want to perform some actions on the payload data or on the state
			// then we can do it in the prepare method and then return the formated state
			// Then, the returned formatted state will then be passed to the reducer method which is the actual reducer method where we perform actions on the data and update the feature state.
			prepare: (title, content, userId) => {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						userId,
						date: new Date().toISOString(),
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				};
			},

			// reducer method
			reducer: (state, action) => {
				// normally mutating the state because immerjs(provided within the redux-toolkit) is handling the creation of new state and then pushing the data into that new state and then replacing the new updated data of the current feature state to the new data.
				// Also immerjs only works inside the createSlice method for updating the feature state.
				state.postsData.push(action.payload);
			},
		},
		// reducer to increase the reactions count in the posts features
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.postsData.find(
				(post) => post.id === postId
			);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
	// this extraReducers method handles the action created by createAsyncThunks and this extraReducers method accepts a builder parameter.
	// This builder parameter is an object that lets us defined addtional case reducers that run in response to the action defined outside of the slice.
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded";

				// Note: action.payload -> this is response.data returned from the createAsyncThunk action creator.

				// adding date and reactions to the posts
				let min = 1;
				const loadedPosts = action.payload.map((post) => {
					post.date = sub(new Date(), { minutes: min++ }).toISOString();
					post.reactions = {
						thumbsUp: 0,
						wow: 0,
						heart: 0,
						rocket: 0,
						coffee: 0,
					};
					return post;
				});
				// Add the loadedPosts to the current posts state
				state.postsData = state.postsData.concat(loadedPosts);
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				(state.status = "failed"), (state.error = action.error.message);
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				action.payload.userId = Number(action.payload.userId);
				action.payload.date = new Date().toISOString();
				action.payload.reactions = {
					thumbsUp: 0,
					wow: 0,
					heart: 0,
					rocket: 0,
					coffee: 0,
				};

				// console.log(action.payload);
				state.postsData.push(action.payload);
			});
	},
});

// selector function for the postSlice feature state
// This selector function will help us in selecting only the state
// for this feature which is postSlice feature
export const selectAllPosts = (storeState) => storeState.posts.postsData;
export const getPostsStatus = (storeState) => storeState.posts.status;
export const getPostsError = (storeState) => storeState.posts.error;

// exporting the postSlice feature Reducers Action Creators -
// These actions creators methods are generated by the createSlice() method with the
// same name as the reducers that we have defined in the reducers property in the
// createSlice method()
export const { postAdded, reactionAdded } = postSlice.actions;

// export the postSlice feature Reducer
export default postSlice.reducer;
