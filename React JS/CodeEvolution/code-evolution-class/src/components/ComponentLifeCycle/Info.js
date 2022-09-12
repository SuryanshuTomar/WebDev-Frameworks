// => There are four phase in the component Life cycle -
// 1. Mounting - When an instance of a component is being created and inserted in to the DOM.
//       a. constructor(props)
//       b. static getDerivedStateFromProps(props, state)
//       c. render
//       d. componentDidMount

// 2. Updating - When a component is being re-rendered as a result of changes to either its props or state.
//       a. static getDerivedStateFromProps(props, state)
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
//       a. static getDerivedStateFromError
//       b. componentDidCatch
