// => There are four phase in the component Life cycle -
// 1. Mounting - When an instance of a component is being created and inserted in to the DOM.
//       a. constructor(props)
//       b. static getDerivedStateFromProps(props, state)
//       c. render
//       d. componentDidMount

// 2. Updating - When a component is being re-rendered as a result of changes to either its props or state.
//       a. static getDerivedStateFromProps(props, state)
//       b. shouldComponentUpdate
//       c. render
//       d. getSnapshotBeforeUpdate
//       e. componentDidUpdate

// 3. Unmounting - When a component is being removed from the DOM.
//       a. componentWillUnmount

// 4. Error Handling -  When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
//       a. static getDerivedStateFromError
//       b. componentDidCatch
