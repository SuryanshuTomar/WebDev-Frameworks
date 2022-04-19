// => WHAT ARE CUSTOM HOOKS ?

// - Custom hooks are just regular functions just as the built-in hooks, like use state, are in the end just functions, but they are functions which can contain stateful logic.
// - You can build custom hooks, and use these custom hook functions to outsource stateful logic into reusable functions. 
// - Unlike regular functions, custom hooks can use other React hooks, including other custom hooks. And they can, therefore, also leverage React state managed with useState or useReducer, useEffect and so on.
// - With custom hooks we can outsource logic, which we might be using in different components, into a custom hook, which we can then call from all these various components. So, it is simply a mechanism of reusing logic, just as regular functions are with the special thing that in these custom hook functions, we can use React hooks and other hooks.

