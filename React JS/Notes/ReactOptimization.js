// => TECHINIQUES FOR OPTIMIZATION -

// - What is Unnecessary Render ?
// - Unnecessary Render is where the child component goes through the render phase but not the commit phase.

// - Causes for Re-render -
// 1. A component can re-render if it calls a setter function or a disptach function.
// 2. A component can re-render if its parent component re-renders.
// 3. A component can re-render with Context API also.

// -------------------------------------------------------------------------------------------------
// -> Technique For Optimization When Dealing With Parent And Child Component -
// A. Same Element Reference  -

// - Optimising the Unnecessary Render without Memoisation -
// - To optimise the unnecessary render of the child component, we can move the child component from being invoked in the parent component JSX, to beings passed as a prop.
// - It could be any prop, we here chose children prop.
// - This will not cause the unnecessary render of the child components. Because in our component tree, when we call the setter function in the parent component, the parent component gets flagged for re-render and react will see the {children} props as the part of the JSX and this children props references the Child component. And As we know that, a component can change its state but it can never change its props.
// - So, taking this into consideration, React automatically provides the optimization.
// - This is also called as Same Element Reference.

// Steps -
// 1. Whenever there is re-render cause by change in the parent component state change, React looks at the Parent Component and It converts the JSX of parent component into the React Element along with props and children props.
// 2. React sees that the render is caused by a state change in Parent component.
// 3. React sees that the props also include the child component reference but it has no means of directly changing the prop. So all props in the parent JSX will have the same reference/value as the previous one and will use the same value/reference for the props value.
// 4. So, if any props is referencing to any child component then the same element reference will cause any change while diffing and render phase will be skipped for the child component.

// From this -
// <div>
//    <h4>ParentOne Counter : {count}</h4>
//    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
//       Click Me
//    </button>
//    <ChildOne />
// </div>

// To this -
// <div>
//    <h4>ParentOne Counter : {count}</h4>
//    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
//       Click Me
//    </button>
//    {children}
// </div>

// Note: If a parent component is re-rendering because of props change in parent component or cause by the re-rendering of the GrandParent Component then the child component will also have to be re-rendered.

// B. React Memo -
// - To let know React to only re-render the child component only when the passed props changed and not to do the unnecessary re-renders, We can use React.Memo() which is Higher Order Component which we can use to wrap components if they render the same result given the same props. Doing this will give a performance boost by memoising the render output. So, if our component props don't change between the renders, React will skip rendering the component and will reuse the last rendered result.
// - React.memo() performs a shallow comparison of the previous and new props and re-render the child component only if the props have changed.

// - Question on Optimization -
// Ques 1- When to use Same Elment Reference Technique and when to use React.memo() ?
// Ans 1-
// a. Same Elment Reference -
// - We can use this when parent component re-renders because of the state change in the parent component which cause the child component to re-render.
// - This technique does not work if the parent component re-renders because of changes in its props.
// - When State Change - Yes
// - When Props Change - No

// b. React.memo() -
// - We can use it when the child component is being asked to re-render due to changes in the parent's state which do not affect the child components props in anyway.
// - React.memo() will still work if the child component does not have any props. But it is recommended to use Same Element Reference in this case.

// Ques 2- If React.memo() provides the optimization by comparing the props, why not wrap every single component with React.memo() ? or Why doesn't React just internally memoize every component and not expose React.memo() to the developers?
// Ans 2- "Shallow comparisons aren't free. They are O(prop count). And they only buy somthing if it bails out. All Comparisons where we end up re-rendering are wasted. Why would you expect always comparing to be faster?. Considering many components always get different props."
// - One more thing to note is that, When we optimize the rendering of one component, React will also skip rendering that component's entire subtree because it's effectively stopping the default "render children recursively" behavior of React.

// ---------------------------------------------------------------------------------------------
// => Incorrect Memo With Children -

// 1. There is no need to wrap the child component with React.memo() if the child component itself has children elements because children props will always has a new reference to due to which the child component will always re-render. The incorrect memo will always simply add to our component render time as new references to the children props will always cause the memoized child component to re-render.

// 2. Using React.memo() with child components where props will not change but the UI will change due to the child component which are impure component(Components in which JSX will change even though the props and state remains the same) like using Date functions in JSX or MATH.random() in JSX where the result will always change every time the component is rendered. So, In this case also, React.memo() will be an incorrect Optimization.

// 3. If we are passing object references to memoized child component(wrapped in React.memo()) then child component will always re-render and React optimazation will not happen because the object(all kind of objects like object literal, arrays, functions etc) reference we are passing to the child component will always change every time we re-render the parent component and since the reference is now changed the child component will also have to re-render always. (In this case, we can use useCallback and useMemo to have the correct optimzation for padding the object references)

// ---------------------------------------------------------------------------------------------
// => Context API Optimization Using React.memo -

// - Whenver the context provider is in the parent component and the parent component's state updates, every child components re-renders and not just the component consuming the context value. As it is the default rendering behavior of React.

// 1. One way to optimize is to use React.memo() - We can optimize it using React.memo() so that only the component consuming the context value will re-render and not all the children of context provider

// 2. Another way to optimize is to use Same Element Reference -
// - Example -(
// 	<ContextParent>
// 		<ChildA />
// 	</ContextParent>
// );
