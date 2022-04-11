// =>  WHAT IS AN "EFFECT" (OR A "SIDE EFFECT") ?

// - We know that React app as a whole and also especially the React library itself has one main job to render the UI, to React to our user input, to re-render the UI when it's needed.
// - Therefore, the main job of React the application  is to Evaluate and Render the JSX code and the DOM. We want to manage the State and Props to make sure that every component has the data it needs and that we reflect the user input correctly. And We wanna React to user events as mentioned and of course React is there to also re-evaluate our components and their JSX code and manipulate the real Dom as needed.
// - This is all baked into React with the tools and features we learned this far and which we will dive into throughout this course of course. So something like to useState Hook, props and so on.
// - So, Side Effect are the tasks that happens outside of the normal Components Evaluations and Render Cycle of components - especially when they might block/delay the the component rendering. Eg - http request
// - In other words, Side effects are basically anything that affects something outside of the scope of the current function that's being executed
// - One thing to note is that, Side Effects should not go directly into the component function because that would most likely create bugs like - infinite loops of rerendering or simply sending too many requests of something.

// => Handling Side Effects -
// - For handling side effects we use a special React Hook - The useEffect()Hook.
// - The useEffect()Hook is simply another built in Hook.
// - So just like other hooks we can run this hook inside of our component function.
// - The useEffect()Hook is called with two arguments with two parameters.
// - The first argument is a function that should be executed after every component evaluation if the specified dependencies changed. And the specified dependencies are the second argument that you pass in. That's an array full of dependencies and you will see how these dependencies look like throughout this module.
// - So an array full of dependencies and whenever such a dependency changes that first function will re-run. And therefore in that first function you can put any side effect code and that code will then only execute when the dependencies specified by you changed and not when the component re-renders but only when your dependencies changed.

// => UseEffect() Syntax -

// => What should not be added as dependencies to useEffect Hook ?
// - There are a few exceptions you should be aware of:
// 1. You DON'T need to add state updating functions as React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though).
// 2. You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change.
// 3. You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa).
// 4. So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!.

// - Here's a made-up dummy example to further clarify the above-mentioned scenarios:
// import { useEffect, useState } from 'react';
// let myTimer;
// const MyComponent = (props) => {
//   const [timerIsActive, setTimerIsActive] = useState(false);

//   const { timerDuration } = props; // using destructuring to pull out specific props values

//   useEffect(() => {
//     if (!timerIsActive) {
//       setTimerIsActive(true);
//       myTimer = setTimeout(() => {
//         setTimerIsActive(false);
//       }, timerDuration);
//     }
//   }, [timerIsActive, timerDuration]);
// };

// In this example:
// - "timerIsActive" is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated).
// - "timerDuration" is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well).
// - "setTimerIsActive" is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change.
// - "myTimer" is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated.
// - "setTimeout" is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change

// NOTE:
// const { someProperty } = someObject;
// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someProperty]);

// - This is a very common pattern and approach, which is why I typically use it and why I show it here (I will keep on using it throughout the course).
// I just want to point out, that the key thing is NOT that we use destructuring but that we pass specific properties instead of the entire object as a dependency.

// - We could also write this code and it would work in the same way -
// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someObject.someProperty]);
// - This works just fine as well!

// - But you should avoid this code:
// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someObject]);

// - Why?
// - Because now the effect function would re-run whenever ANY property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on.

// --------------------------------------------------------------------------------------------------------
// => useReducer() HOOK FOR STATE MANAGEMENT -

// - useReducer() is another built in Hook and it will help us with state management. So it's a bit like useState, but actually with more capabilities and especially useful for more complex state.
// - Because sometimes you have more complex state, for example, multiple States that kind of belong together, that are managing the same thing just different aspects of it. Or you have multiples states that kind of change together or are related.
// - In such cases, useState and the state you get from there often becomes hard or error-prone to use and manage. And it's easy then to ride bad or inefficient or potentially buggy code, which is of course it's never what we want, useReducer is then an alternative to useState. So it's a replacement, if you need a more powerful state management.
// - But its not necessary to use the useReducer() hook just because its more powerful than the useState() hook because useReducer() is also more complex to use than the useState() hook. There are some case where we have to manage multiple complex states where using the useReducer() hook might be worth it.
// - If we want update a state, which depends on another state, then using the useReducer() hook would be a good idea to merge these states into a single state and then simply manage the merged state. So, when our state becomes more complex, bigger and combines multiple related states, it would be better to use useReducer() hook.

// => UseReducer() Syntax -
// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
// 1. state - The state snapshot used in the component  re-render/re-evalutation cycle.
// 2. dispatchFn - This is a function that can be used to dispatch a new action(i.e. trigger an update of the state).
// 3. reducerFn(prevState, action) => newState - A function that is triggered automatically once an action is dispatched(via dispatchFn()) - It recieves the latest state snapshot and should return the new, updated state.
// 4. initialState - The Initial State
// 5. initFn - This is a function that set the initial state programmatically.

// => How useReducer() hook works ?
// - useReducer just like useState, always returns an array with exactly two values. And therefore you can use array destructuring as we did it with useState to pull out these values and store them in separate constants.
// - Now, the two values you are getting are- 1. the latest state snapshot, because it's state management mechanism is like useState. 2. a function that allows you to update that state snapshot. So that's kind of the same as for useState, though the state updating function will work differently.
// - Instead of just setting a new state value, you will dispatch an action. And that action will be consumed by the first argument you pass to useReducer a so-called reducer function.
// - So this is a function which gets the latest state snapshot automatically because this function will be called by React and it gets the action that was dispatched. Because React will call this reducer function whenever a new action is dispatched. So then it gets the last state snapshot managed by React. And that gets the action that was dispatched that triggered this reducer function execution.
// - Now the reducer function then also should do one important thing. It should return a new updated state.
// - In addition, you can also set some initial state and also an initial function that should run to set the initial state in case your initial state is a bit more complex. And for example, the result of let's say HTTP requests or anything like that.

// -----------------------------------------------------------------------------------------------------------
// => USESTATE VS USEREDUCER HOOK (FOR STATE MANAGEMENT) -

// - Generally, we will come to know when to use useReducer. For example, when using the useState becomes too cumbersome, we find ourself dealing with a lot of kind of related state snapshots, which still are kind of independent and you start updating them together in a way that just doesn't work out. Then, we have to  use useReducer.

// - When to use UseReducer() Hook and When to use UseState() -
// 1. useState() -
// - useState() is our main state management tool. Typically, we start with useState() for state management.
// - It's great for independent pieces of state and data.
// - It's great for simple state, you could say.
// - It's great if state updates are easy and limited to a few kinds of updates.
// - So, if we don't have a lot of different cases that will change a state and especially if you don't have, let's say, an object as a state or anything like that, then use useState().

// 2. useReducer() -
// - Now if we have an object as a state or a more complex state useReducer might be interesting because, in general, useReducer is great if we need more power and more power means that we can write such a reducer function that can contain more complex state updating logic where you always are guaranteed to work with the latest state snapshot. And where we can move that potentially more complex logic out of your component function body into a separate reducer function.
// - We should especially consider useReducer, if you're dealing with related data with state that is made up of related pieces of state. For example, in form validation, we can use a single reducer function for validating the email and password and updating their values in the form instead of maintaining different states for validation and updating values for both password and email.
// - In general, useReducer can be helpful if we have more complex state updates, if we have different cases, different actions that can change a state.

// Note:
// - We can certainly also handle cases where useReducer would be good with just useState, especially when combining that with useEffect. But sometimes using useReducer just might be more elegant, or simpler.
// -  We should also not always use the useReducer for state management as that would be overkill.

// ---------------------------------------------------------------------------------------------------------
// => REACT CONTEXT -

// A. React.createContext() -
// const MyContext = React.createContext(defaultValue);
// - Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
// - The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

// B. Context.Provider -
// <MyContext.Provider value={/* some value */}>
// - Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
// - The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
// - All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.
// - Changes are determined by comparing the new and old values using the same algorithm as Object.is.

// Note -
// - The way changes are determined can cause some issues when passing objects as value: see Caveats.

// C. Class.contextType
// class MyClass extends React.Component {
//   componentDidMount() {
//     let value = this.context;
//     /* perform a side-effect at mount using the value of MyContext */
//   }
//   componentDidUpdate() {
//     let value = this.context;
//     /* ... */
//   }
//   componentWillUnmount() {
//     let value = this.context;
//     /* ... */
//   }
//   render() {
//     let value = this.context;
//     /* render something based on the value of MyContext */
//   }
// }

// D. MyClass.contextType = MyContext; -
// - The contextType property on a class can be assigned a Context object created by React.createContext(). Using this property lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.

// Note -
// - You can only subscribe to a single context using this API. If you need to read more than one see Consuming Multiple Contexts.
// - If you are using the experimental public class fields syntax, you can use a static class field to initialize your contextType.

// class MyClass extends React.Component {
//   static contextType = MyContext;
//   render() {
//     let value = this.context;
//     /* render something based on the value */
//   }
// }

// E. Context.Consumer -
// <MyContext.Consumer>
//   {value => /* render something based on the context value */}
// </MyContext.Consumer>
// - A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
// - Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

// Note -
// - Context.Consumer is one way of consuming the React Context
// - Another way of consuming the React Context is to use useContext() Hook. It is also more elegent way of consuming the React Context and recommended also.

// F. Context.displayName -
// - Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context.
// - For example, the following component will appear as MyDisplayName in the DevTools:
// const MyContext = React.createContext(/* some value */);
// MyContext.displayName = 'MyDisplayName';
// <MyContext.Provider> // "MyDisplayName.Provider" in DevTools
// <MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

// => Why to use React Context ?
// - React context helps us avoid the problem of props drilling.
// - Props drilling is a term to describe when you pass props down multiple levels to a nested component, through components that don't need it.
// - Here is an example of props drilling. In this application, we have access to theme data that we want to pass as a prop to all of our app's components.
// - As you can see, however, the direct children of App, such as Header, also have to pass the theme data down using props -

// export default function App({ theme }) {
//   return (
//     <>
//       <Header theme={theme} />
//       <Main theme={theme} />
//       <Sidebar theme={theme} />
//       <Footer theme={theme} />
//     </>
//   );
// }

// function Header({ theme }) {
//   return (
//     <>
//       <User theme={theme} />
//       <Login theme={theme} />
//       <Menu theme={theme} />
//     </>
//   );
// }

// - What is the issue with this example?
// - The issue is that we are drilling the theme prop through multiple components that don't immediately need it.
// - The Header component doesn't need theme other than to pass it down to its child component. In other words, it would be better for User , Login and Menu to consume the theme data directly.
// - This is the benefit of React context – we can bypass using props entirely and therefore avoid the issue of props drilling.

// => Full Explaination -
// - https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-the-usecontext-hook
// - https://daveceddia.com/usecontext-hook/

// 3. useContext() -
// -  Another way of consuming context became available in React 16.8 with the arrival of React hooks. We can now consume context with the useContext hook.
// - Instead of using render props, we can pass the entire context object to React.useContext() to consume context at the top of our component.

// - Syntax - const value = useContext(MyContext);

// - useContext() accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
// - When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

// - Don’t forget that the argument to useContext must be the context object itself:
// - Correct: useContext(MyContext)
// - Incorrect: useContext(MyContext.Consumer)
// - Incorrect: useContext(MyContext.Provider)

// - A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.

// - Tip -
// - If you’re familiar with the context API before Hooks, useContext(MyContext) is equivalent to static contextType = MyContext in a class, or to <MyContext.Consumer>.
// useContext(MyContext) only lets you read the context and subscribe to its changes. You still need a <MyContext.Provider> above in the tree to provide the value for this context.

// -------------------------------------------------------------------------------------------------------------
