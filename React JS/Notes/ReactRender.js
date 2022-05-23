// => RENDERING IN REACT -

// - In React, when we run our application, the code written in our components gets translated into elements that gets mounted onto the DOM.
// - The React Documentation splits this work into two phases -
//    1. Render Phase
//    2. Commit Phase

// - Initial Render -
// 1. Render Phase -
// - In the Render Phase, React will start at the root of the component tree and goes downward to the leaf components and while traversing for each of the component, react invokes the createElement() method and converts the component JSX into React Elements and stores that render() method output. React elements are basically Javascript objects that decribes the structure of application UI. Once the JSX to React Element conversion is done for the entire component tree, all the react elements are handed over to the Commit Phase.

// 2. Commit Phase -
// - In the Commit Phase, The react elements are applied to the DOM using the ReactDOM package.

// NOTE - This Above Behavior written is only applicable to the initial render of the React Application and we all know that in react components need to re-render in order to update the UI.

// - Re-Render -
// 1. Render Phase -
// - During the Render Phase, React will start at the root of the Component Tree and goes downward to the leaf components finding all the components that have been flagged for needing updates. A component can flag itself for an update by calling the useState() setter function or by calling the useReducer() dispatch function(). Then for each of the flagged React Component, react will invoke the createElement() method and converts the components JSXs into react elements and stores the render() method output. Once the conversion is done for all the flagged components and the component affected by the flagged components, react will compare the new set of react elements with the ones that were produced from the last render. A list is created with all the changes that need to be made to the DOM and handed over to the Commit Phase.
// Steps -
// 1. Find all the elements flagged for update.
// 2. For each flagged component, convert JSX to React element and store the result.
// 3. Perform Reconciliation -> Diffing the old and new tree of React Elements (AKA Virtual DOM)
// 4. Hand over the changes to the commit phase.

// 2. Commit Phase -
// - In the commit phase, the changes are actually applied to the DOM.
// Steps -
// 1. Apply changes to the DOM. 

// Note -
// - The point to note here is that Rendering is not same as updating the DOM. This distinction is very important because a component maybe rendered without any visible changes to the DOM.
// - For eg - During Re-rendering if a component converts into the same react element as it did in the previous render cycle, the new elements are discarded and no changes are applied to the DOM.
// - Perfomance issues will occur it is mostly due to slow DOM updates. But React updates DOM efficiently, all updates in react are batched and updated at once. This helps reduce the performance issues incurred by updating the DOM multiple times in rapid successions.
// - In React Docs, it is mentioned that - "The Commit Phase is usually very fast, but rendering can be slow"
