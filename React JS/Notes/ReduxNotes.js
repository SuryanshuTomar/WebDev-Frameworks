// What is Redux ?
// - Redux is a Predictable State Container for JS Apps
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


