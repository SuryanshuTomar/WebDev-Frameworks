// - What is Unnecessary Render ?
// - Unnecessary Render is where the child component goes through the render phase but not the commit phase.

// - Causes for Re-render -
// 1. A component can re-render if it calls a setter function or a disptach function.
// 2. A component can re-render if its parent component re-renders.

// - Optimising the Unnecessary Render without Memoisation -
// - To optimise the unnecessary render of the child component, we can move the child component from being invoked in the parent component JSX, to beings passed as a prop.
// - It could be any prop, we here chose children prop.
// - This will not cause the unnecessary render of the child components. Because in our component tree, when we call the setter function in the parent component, the parent component gets flagged for re-render and react will see the {children} props as the part of the JSX and this children props references the Child component. And As we know that, a component can change its state but it can never change its props.
// - So, taking this into consideration, React automatically provides the optimization.
// - This is also called as Same Elment Reference.

// Steps -
// 1. Whenever there is re-render cause by change in the parent component state change, React looks at the Parent Component and It converts the JSX of parent component into the React Element along with props and children props.
// 2. React sees that the render is cased by a state change in Parent component.
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
