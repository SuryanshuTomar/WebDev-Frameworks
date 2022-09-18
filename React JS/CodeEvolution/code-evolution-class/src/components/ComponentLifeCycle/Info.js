// => There are four phase in the component Life cycle -
// 1. Mounting - When an instance of a component is being created and inserted in to the DOM.
//       a. constructor(props)
//       b. static getDerivedStateFromProps(props, state)
//       c. render
//       d. componentDidMount

// 2. Updating - When a component is being re-rendered as a result of changes to either its props or state.
//       a. static getDerivedStateFromProps(props, state) - This method is called when the state of the component depends on changes in props over time.
//       b. shouldComponentUpdate(nextProps, nextState) (for performance optimization)
//       c. render
//       d. getSnapshotBeforeUpdate(prevProps, prevState) (it will either return an object
//             or null value and this return value will be passed as a
//             third parameter of componentDidUpdate())
//       e. componentDidUpdate(prevProps, prevState, snapShotValue)
//             (will be called once in each render cycle)

// 3. Unmounting - When a component is being removed from the DOM.
//       a. componentWillUnmount

// 4. Error Handling -  When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
//       a. static getDerivedStateFromError (This method is used to render a fallback UI after an error is thrown)
//       b. componentDidCatch (This method is used to log the error information)

// -> Error Boundary - A class component that implements either one or both of the lifecycle methods getDerivedStateFromError() or componentDidCatch() becomes an Error Boundary.

// Note:
// 1. Error Boundaries catch error during rendering in lifecycle methods and in the constructors of the whole React tree but they dont catch error inside Event Handlers. For them, we need to use try and catch blocks.
// 2. A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
// 3. The Placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
// 4. Provide a way to gracefully handle error in application code.
