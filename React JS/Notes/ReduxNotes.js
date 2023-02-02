// What is Redux ?
// - Redux is a Predictable State Container for JS Apps
// - Redux is a library and is not tied to React, Redux is for JavaScript applications. It can use with React, Angular, Vue or even Vanilla JS.
// - It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
// - We can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

// - Three Core Concepts of Redux -
// 1. Store - It holds the state of our application. i.e - Cake Shop.
// 2. Action - It describes what will happen in the application. i.e - Cake Ordering.
// 3. Reducer - Reducer is what ties the store and action together. It handles action and decide how to update the state. i.e - Shopkeeper.

// - Three Core Principles of Redux -
// 1. First Principle - "The global state of your application is stored as an object inside a single store." This means in redux, we have maintain our application state in a single object which would be managed by the Redux Store.
// 2. Second Principle - "The only way to change the state is to dispatch an action, an object that describes what will happen". This means, to update the state of our application, we need to let Redux know about that with an action and we are not allowed to directly update the state object.
// 3. Third Principle - "To specify how the state tree is updated based on actions, we have to write pure reducers". Pure Reducers are basically functions that takes (previous/currentState, action) as parameters and returns the newState.

// - Redux Overview -
// - We start off with a Simple JavaScript Application.
// - The state of the application maintained seprately in the Redux Store. And our application is always subscribed to this redux store.
// - However, our JS application cannot directly update the state.
// - If our application want to to update the state, it has to emit or dispatch an action.
// - Once the action has been dispatched, the reducer function then handles that action and updates the current state. And as soon as the state is updated, the newstate value will now be passed to our JS application because our app is subscribed to the store.

// =>  Actions -
// - The only way our application can interact with the store.
// - Carry some information from our app to the redux store.
// - Plain JS Objects
// - Have a "type" property that descibes something that happened in the application.
// - The "type" property is typically defined as string contants.
// - With Redux, we defines an actionCreater() function that simply creates an action and return that action.

// => Reducer Function -
// - Reducer specify how the app's state changes in response to actions sent to the store.
// - It is a function that accepts state and action as arguments, and returns the next state of the application.
// - (prevState, action) => newState

// => Store -
// - There will always be one store for the entire application.
// - Responsibilities -
//    1. Holds the application state.
//    2. Allow access to state via getState() method.
//    3. Allows state to be updated via dispatch(action) method.
//    4. Registers listeners via subscribe(listenerFunction) method.
//    5. Handles unregistering of listeners via the function returned by subscribe(listener) method.

// => Important Redux Functions or Properties -
// 1. createStore and configureStore(Recommeded to use from Redux Tookit) to create a store.
// Syntax:
// const createStore = redux.createStore;
// const store  = createStore();

// 2. getState() to get the State of the store.
// Syntax: store.getState();

// 3. subscribe() to subscribe and unsubscribe our app to the store.
// Syntax:
// const unsubscribe = subscribe(callbackSubscribeFn) // To Subscribe
// unsubscribe() // To Unsubscribe

// 4. bindActionCreators to bind the action creator functions.
// Syntax:
// const bindActionCreators = redux.bindActionCreators;
// const actions = bindActionCreators({actionCreatorFn1, actionCreatorFn2}, store.disptach).
// actions.actionCreatorFn1()
// actions.actionCreatorFn2()

// ------------------------------------------------------------------------------------
// => IMPORTANT  -

// 1. We can use Selector Function to for useSelector Hook to return the state from the store.
// Examples -
// selectAllPosts selector for useSelector hook
// export const selectAllPosts = (state) => state.posts.posts;

// getCount selector for useSelector hook
// export const getCount = (state) => state.posts.count;

// useSelector selector for useSelector hook
// export const getPostsStatus = (state) => state.posts.status;

// getPostsError selector for useSelector hook
// export const getPostsError = (state) => state.posts.error;

// getPostsError selector for useSelector hook
// export const getPostById = (state, postId) =>
// state.posts.posts.find((post) => post.id === postId);

// 2. useSelector() hook will run every time an action is dispatched and it forces the useSelector to run again and it forces the component to re-render If a reference value is returned. So, if we somehow returning a new value to the useSelector hook then it will re-render the component tree. And we can fix this by creating a memoised selector using a createSelector function from @reduxjs/toolkit.
// creating this selector
// createSelector([fn1, fn2.....], cbFn) -
// The first argument is a dependency array that takes one or more selector functions whose return values will be passed as a parameter to the cbFn which is a second parameter of the createSelector and createDraftSafeSelector Method.
// The second parameter of createSelector and createDraftSafeSelector Method is a callBackFunction which will run if the return value of the selectors functions in the dependency array changes when we call our selectorFunction that is created from the createSelector method. And then this cb selector function will run when we call our selectorFuntion(so basically this cbFN is our selector function in which we can put our code into.)
// So, if the value that are returned by the functions that are in the dependency array changes  then the useSelector hook will going to run our selector function otherwise not. And this how our selector function will get memoised
// export const selectPostByUser = createSelector(
// 	[selectAllPosts, (state, userId) => userId],
// 	(posts, userId) => posts.filter((post) => post.userId === userId)
// );

// More safe option -
// export const selectPostByUser = createDraftSafeSelector(
// 	[selectAllPosts, (state, userId) => userId],
// 	(posts, userId) => posts.filter((post) => post.userId === userId)
// );

// 3. Redux toolkit adds an unwrap() function to the returned promise and then that returns a new promise that either has the action payload or it throws an error if it's the rejected action so that lets us use this try-catch logic here so it will throw an error
// try {
// 	dispatch(addNewPost({ title, body: content, userId })).unwrap();
// } catch (error) {
// 	console.error("Failed to save the Post : ", error);
// } finally {
// 	setAddRequestStatus("idle");
// }

// 4. CreateSlice Object Structure Example -
// const postsSlice = createSlice({
// 	name: "posts",
// 	initialState,
// 	reducers: {
// 		postAdded: {
// 			// seprately defining the reducer method and the prepare method so that we can
// 			// abstract the structure of the state from the main UI component and directly
// 			// provide the values to the reducer.
// 			// the prepare method will take the states content and return the action payload
// 			// as it needs to be formatted and then it will be passed to the reducer
// 			prepare: (title, content, userId) => {
// 				return {
// 					payload: {
// 						id: nanoid(),
// 						title,
// 						content,
// 						userId,
// 						date: new Date().toISOString(),
// 						reactions: {
// 							thumbsUp: 0,
// 							wow: 0,
// 							heart: 0,
// 							rocket: 0,
// 							coffee: 0,
// 						},
// 					},
// 				};
// 			},
// 			reducer: (state, action) => {
// 				state.posts.push(action.payload);
// 				// directly mutating the state because immerjs will handle it.
// 			},
// 		},
// 		reactionAdded: (state, action) => {
// 			const { postId, reaction } = action.payload;
// 			const existingPost = state.posts.find((post) => post.id === postId);
// 			if (existingPost) {
// 				existingPost.reactions[reaction]++;
// 			}
// 		},
// 		increaseCount(state, action) {
// 			state.count += 1;
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(fetchPosts.pending, (state, action) => {
// 				state.status = "loading";
// 			})
// 			.addCase(fetchPosts.fulfilled, (state, action) => {
// 				state.status = "succeeded";

// 				// Adding date and reactions
// 				let min = 1;
// 				const loadedPosts = action.payload.map((post) => {
// 					post.date = sub(new Date(), { minutes: min++ }).toISOString();
// 					post.reactions = {
// 						thumbsUp: 0,
// 						wow: 0,
// 						heart: 0,
// 						rocket: 0,
// 						coffee: 0,
// 					};
// 					return post;
// 				});

// 				// Add any fetched posts to the array
// 				state.posts = state.posts.concat(loadedPosts);
// 			})
// 			.addCase(fetchPosts.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.error.message;
// 			})
// 			.addCase(addNewPost.fulfilled, (state, action) => {
// 				action.payload.userId = Number(action.payload.userId);
// 				action.payload.date = new Date().toISOString();
// 				action.payload.reactions = {
// 					thumbsUp: 0,
// 					wow: 0,
// 					heart: 0,
// 					rocket: 0,
// 					coffee: 0,
// 				};
// 				// console.log(action.payload);
// 				state.posts.push(action.payload); // directly mutating the state
// 			})
// 			.addCase(updatePost.fulfilled, (state, action) => {
// 				if (!action.payload?.id) {
// 					console.log("Update could not complete !");
// 					console.log(action.payload);
// 					return;
// 				}

// 				const { id } = action.payload;
// 				action.payload.data = new Date().toISOString();
// 				const posts = state.posts.filter((post) => post.id !== id);
// 				state.posts = [...posts, action.payload];
// 			})
// 			.addCase(updatePost.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.error.message;
// 			})
// 			.addCase(deletePost.fulfilled, (state, action) => {
// 				if (!action.payload?.id) {
// 					console.log("Delete could not complete !");
// 					console.log(action.payload);
// 					return;
// 				}

// 				const { id } = action.payload;
// 				const posts = state.posts.filter((post) => post.id !== id);
// 				state.posts = posts;
// 			})
// 			.addCase(deletePost.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.error.message;
// 			});
// 	},
// });

// 5. Useful Snipped we can use -
// const canSave = [title, content, userId].every(Boolean) && requestStatus === "idle";
