// =>  What is an "Effect" (or a "Side Effect") ?
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
