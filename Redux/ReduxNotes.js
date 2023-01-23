// What is Redux ?
// - Redux is a Predictable State Container for JS Apps
// - Redux is a library and is not tied to React, Redux is for JavaScript applications. It can use with React, Angular, Vue or even Vanilla JS.
// - It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
// - We can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

// - NPM Command - 
// npm install redux

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
