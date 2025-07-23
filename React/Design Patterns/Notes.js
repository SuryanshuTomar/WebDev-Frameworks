// => What are Design Patterns?
// -> Design patterns are effective solutions to common application development challenges.

// => Common Challenges in React Developement -
// 1. Creating reusable layouts.
// 2. Reusing complex logic between multiple components.
// 3. Working with forms.
// 4. Incorporating functional concepts into our code.

// => Design Pattern 1 -> LAYOUT/PRESENTATIONAL COMPONENTS PATTERN ***
// -> Layout Components are React Components that deals primarily with arranging other components on page.
// -> The idea behind the Layout Component is that the component should not know where is being displayed on the page.
// -> Types of Layout Components -
// a. Split Screens
// b. Lists and items
// c. Modals

// => Design Pattern 2 -> UNCONTROLLED VS UNCONTROLLED COMPONENTS PATTERN
// -> Uncontrolled Components - Components that keep track of their own states and release data only when some event occurs(like the submit event for html forms)
// -> Controlled Components - Components that do not keep track of their own, instead their parent is the one that takes of keeping track of the state and that state is then passed through to a controlled component as props(like when we use the useState Hook with text inputs.)
// -> Note: We generally prefer controlled components because we can control on how and when we can change and access the values from these components. And also these kind of components are more reusable.

// => Design Pattern 3 -> CUSTOM HOOKS PATTERN ***

// => Design Pattern 4 -> FUNCTIONAL PROGRAMMING PATTERN

// => Design Pattern 5 -> HIGHER ORDER COMPONENTS PATTERN ***
// -> When to use
//    - When we want to apply the same logic to multiple components

// => Design Pattern 6 ->  COMPONENTS COMPOSITION (COMPOUND COMPONENTS IN REACT) ***
// 1. This is another solution to avoid the props drilling in React.
// -> When to use -
//     - When we want to have more control at the higher level.
//     - For better performance

// => Design Pattern 7 -> STATE REDUCER PATTERN COMPONENTS

// => Design Pattern 8 -> STATE MACHINE PATTERN

// => Design Pattern 9 -> RENDER PROPS PATTERN ***
// -> When to use
//    - Also can be used to lift the state up.
//    - When We want to make our component highly customizable.
//    - Provide ability to theme the component according to the design system.

// => Design Pattern 10 -> Provider Pattern ***

// Website to revise and notes -
// https://www.patterns.dev/

// To Revise -
// 1. THe life cycle method ******* Done
// 2. The reconcilliation algo *******
// 3. How the useEffect hook works Done -> Note: All life cycle methods are asynchronous
// 4. Revise all react hooks ****** Done
// 5. Do 2 design patterns and the solid design principle.
// 6. Revise the JS Prototypal inheritance and how the event loop works (basically the namaste react notes.) ****
// 7. React Optimising techniques and check also how the react profiler works. ****
// 8. Redux interview questions from the interview bit website. ****

// Optimisation Techniques -
// 1. Component Composition Pattern for critical things.
// 2. Caching the api calls data.
// 3. Prefetching the data using Tanstack React Query. Also, we can use Axios interceptors for preflight requests.
// 4. Seperating the logic side of things and the UI side of things by managing a single app store either using context api or some other state management libraries like Zustand or React Redux Toolkit.
// 5. Using useCallback and useMemo to memoize the functions and function results.
// 6. Using React.memo in functional components and Using PureComponents in class based components.
