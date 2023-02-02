// => REDUX CONCERNS -

// - Redux requires too much boilerplate code :
//    1. Action
//    2. Action Object
//    3. Action Creator
//    4. Reducer Function
//    5. Action Creator Binder and Dispatcher

// - A lot of other packages have to be installed to work with redux
//    1. redux-thunk
//    2. immer
//    3. redux-devtools

// - This is what resulted in the creation of Redux-Toolkit Library.

// ------------------------------------------------------------------------------------------
// => REDUX TOOLKIT -

// - Redux Toolkit is the official, opinionated, batteries-included toolset for the efficient redux development. It -
//    1. Provideds abstraction over the setup process
//    2. Handles the most common use cases.
//    3. Includes some of the useful utilties.

// -> NPM Command -
// npm install @reduxjs/toolkit

// - Conventions -
// - In Redux Toolkit, its is recommended to group together the reducer logic and action creator for a single feature into a single file. And the file name should have a suffix of "Slice" in it.

// -------------------------------------------------------------------------------------------
// => Creating A Store Using useSlice Method -

// -------------------------------------------------------------------------------------------
// => Creating A Store Using useReducer and useAction Method -

// -----------------------------------------------------------------------------------------
// => Reducers Parts -
// - prepare and reducer

// -----------------------------------------------------------------------------------------
// => Middlewares -

// -----------------------------------------------------------------------------------------
// => ExtraReducers -

// ------------------------------------------------------------------------------------------
// => Selector Functions And createSelector for Performance Optimization -

// ------------------------------------------------------------------------------------------
// => Data Normalization using createEntityAdaptor for Performance Optimization -

// ------------------------------------------------------------------------------------------
// => RTK Query for Data Fetching -

// ------------------------------------------------------------------------------------------
// => Difference RTK Query vs TanStack React-Query -
