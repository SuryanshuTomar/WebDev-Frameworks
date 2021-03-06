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

// ----------------------------------------------------------------------------------------------
// 1. UseState Rendering -

// - After the initial render, one of the ways to flag a component for re-render is by changing the component state. In class component, we can do it by this.setState() method and In function component, we can do it by calling the setter function of the state. And when we call these setter function, the setter function will flag the component as needing an update.
// - During the render phase, React will go through the component tree and identify the flagged components.
// - While identifying the flagged components, React requires that useState updates must pass in or returns a new value(in case of primitives) or reference(in case of objects) as a state value. If useState() does not pass any new value to the useState() function then react will simply bail out from the render phase for that component.
// - The Bailing out part has 2 cases -
//    1. If only the initial render is completed and the value passed to the setter function is same as before the Render phase bails out from proceeding further.
//    2. However, if the component has been re-rendered already, then React will proceed will the render phase of the component one more time
// - After identifying the flagged components, React will then use the createElment() method to convert the components JSX into the a React Element.
// - React will then diff the element produced from the previous render to the new render Elements. React uses an algorithm called Object.is comparision algorithm to perform the Reciliation process.
// - React will then identify the changes and hand them over to the commit phase where the changes are applied to the DOM.

// NOTE:
// - If we change the state of a component to the value same as the current value of the state after the initial render, then the component will not re-render as the prevState and currentState is same.(But this happens only during the initial Render)
// - A special case with the useState() hook and re-rendering is that, If we update a state hook to the same value as the current state, react may re-render the component one more time and then bail out from subsequent renders.

// ----------------------------------------------------------------------------------------------
// 2. UseReducer Rendering -

// - UseReducer() Hook Rendering behaves similar to UseState() Hook Rendering. The only difference between the 2 is that the useState hook has setter function to change the state and flag the component for needing updates, useReducer has a dispatch function to flag the component for needing updates and dispatching the action to the reducer function which then takes decision according to the action dispatched to it and change the state accordingly.

// ----------------------------------------------------------------------------------------------
// 3. Rendering and State Immutability -

// - When we use objects as state, the reference to the object must change for the flagged component in need for update by the state setter functions, Otherwise even if we change our state value in the same object, the reference to the object will not change and our updated state values will not qualify as changed state value and React will simply bail-out from render phase.
// - To fix this issue, we have make a copy of the cuurent state object and make changes to the copied state object and then pass it to the setter function. By doing this we are passing the reference of the new copied object which will now have a different reference than the current state object and the setter function will recognize this state object new state value and will proceed with the reconciliation phase.
// - Direcly Mutating the state is an easy way to create bugs in our application. So, make sure to not do that.
// - The same concept will apply on all types of object in javascripts i.e.- arrays, functions, objects etcs

// ----------------------------------------------------------------------------------------------
// 4.  Rendering When Dealing with Parent and Child Component -

// - The default behaviour for Parent and Child Component for Rendering is that, when a Parent Component Renders, react will recursively render all of its child components.

// -> Case a -  When New State is different from the old state -
// - In this case, same as the default behaviour, when a parent components state changes using a setter function which causes a parent component to re-render, the child component will also re-render.

// -> Case b - When the New State is same as the Old State -
//    -> Case b1 - Right after the initial render -
//    - In this case, the parent component will bail-out of the render phase as we have already learned and if the parent component will not re-render then child component will also not re-render.
//    -> Case b2 - After the re-renders (when the parent component has already been mounted) -
//    - In this case, the parent component will render one more time to make sure if the New State is same the current State(old state) and if its the case then for further subsequent renders the parent component will not re-renders as we have already learned. So, In this case, the child component will not re-render at all.

// Note:
// - During the render phase, when react is converting the JSX code of the parent element to the React element, react check if it has any child component and if it has any, then react will proceed with the render phase of the child component also and conver the JSX of the child component to React element. Once, the JSX for both parent and child is converted to React element, React will diff the elements produced from the previous  render to the new render. And if React sees that only the parent component has changed while the child component is the same then react will only pass the changes of Parent component to the commit phase to be updated to the DOM and will drop the child component changes. Hence, even if the child component re-renders, the changes of the child component will never be commmited to the DOM if the child diff comes out to be the same as before. And this is called as Unnecessary Render.
// - The Unnecessary Renders do affect the performance of an app.

// ---------------------------------------------------------------------------------------------
// 5.  Context API Rendering -

// Component Tree -
// App
// ||
// Parent => (State => counterValue) and (also provide the CountContext.Provider value)
// ||
// ChildA
// ||
// ChildB
// ||
// ChildC => (displaying counterValue)

// - Steps -
// - Lets say that the initial Render is completed and all the components have been rendered once and lets say we called the counter setter function to increment the counterValue and when the counterValue increments, then the parent component will be flagged for re-render.
// -  We know that React starts from the root component and finds the component flagged for the re-render.
// - React sees that the Parent component has been flagged for re-render.
// - When rendering the Parent component, React also sees that the parent component also renders a context provider and then checks to see if the context provider has been given a new value. Since, we have incremented the counterValue so indeed provider has been given a new value.
// - React will make a note to re-render all the component that consumes the context value and in our case that component is ChildC component.
// - Rest of the Render and commit phase is same as usual.

// ---------------------------------------------------------------------------------------------
// -> Recap - Causes for Re-render -

// 1. A component can re-render if it calls a setter function or a disptach function.
// 2. A component can re-render if its parent component re-renders.
