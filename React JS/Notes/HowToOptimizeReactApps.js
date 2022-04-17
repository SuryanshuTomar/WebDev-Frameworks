// => For Functional Components -
// - So To tell React that it should behave in a particular manner while re-evaluating the components, we can wrap the exporting components of which we control the behaviour into React.memo()
// eg- export default React.memo(componentName)
// - React.memo() - It tells React that for this component, which it gets as a argument, React should look at the props this component gets and check the new value for all those props and compare it to the previous value those props got. And only if the value of a prop changed, the component should be re-executed and re-evaluated. And if the parent component changed but the prop values for that component here did not change, component execution will be skipped. If we wrap the component in React.memo() and save it then we can see the result of that.
// - So React.memo() allows us to optimize Functional Components.

// Q - But why aren't we using that on all components if it allows us to optimize them?
// A - Because this optimization comes at a cost. The memo() method here tells React that whenever the Parent component changed, it should go to the child component which is wrapped by memo() and compare the new prop values to the previous prop values, so therefore React needs to do two things -
//    1. It needs to store the previous prop values,
//    2. and it needs to make that comparison.
// - And that, of course, also has its own performance cost. And it, therefore, greatly depends on the component you're applying this to whether it's worth it or not because you're trading the performance cost of re-evaluating the component for the performance cost of comparing props.
// - And it's impossible to say which cost is higher because it depends on the number of props you have and on the complexity of your component and the number of child components your component has.
// - But React.memo can be a great tool if you have a huge component tree with a lot of child components. And on a high level in the component tree, you can avoid unnecessary re-render cycles for the entire branch of the component tree.

// NOTE: React.memo() works only on primitive types passed to props and not on reference types passed to props as the comparison will work on primitive because even if these values get re-evaluated in the parent component but that does not going to work with the reference types as when the parent component get re-rendered the references of the reference types will change and hence the comparison will return false which in turn be passed as a new value to the props of child component and therefore the child component will also get re-evaluated even if the reference type props values are changed.

// -----------------------------------------------------------------------------------------------------
// => USECALLBACK() HOOK -

// - We can make React Memo work for prop values that are Reference Types(or objects) as well.
// - We just need to tweak the way we create and store those objects a little bit. There is an extra hook provided by React that helps us with that. And that is the useCallback() Hook.
// - useCallback is a hook that allows us to basically store a function across component executions. So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution. With that one in the same function object is stored so one in the same place in memory and therefore the comparison does work.
// - Because just to make this clear again as well, if you have object one and you have object two, which looks similar are not equal in JavaScript. But if we store object one into object two then object one will be equal to object two.

// For Example -
// obj1 = {};
// obj2 = {};
// obj1 === obj2 // O/P - false

// But -
// obj1 = {};
// obj2 = obj1;
// obj1 === obj2 // O/P - true

// - And this is exactly how the useCallBack stores Reference Types for us. It will save a function of our choice somewhere in React's internal storage and we'll always reuse that same function object then when this component function executes.
// - Using it is also simple. We just wrapped the function we wanna save with it and pass our function as a first argument to usecallback and useCallback then returns that stored function and when the app function reruns useCallback will look for that stored function which React stored for us and reuse that same function object. So if we know that this function should never change, we can use useCallback to store it.
// - useCallback is like useEffect which wants a second argument and it wants it even more so than useEffect and just like for useEffect the second argument should be an array. An array of dependencies off this useCallback call. And the dependencies here are the same as they are for useEffect. Anything you use in your function which is coming from the surrounding component so any state or props or context should be specified here. We mention the dependencies in dependency array whenever we want to recreate the reference type whenever our dependency change which was earlier prevented by the useCallback.

// --------------------------------------------------------------------------------------------------------
// => HOW STATE UPDATES AND SCHEDULING WORKS IN REACT -

// - In your code, you might have a component and in that component, you might manage some state with the help of the useState hook, and therefore React manages that state for you. 
// - Let's say the initial state for this product component is DVD. Now eventually, because a user clicked a button or whatever, in that component we update that state.
// - For example, with SetNewProduct(), that could be our state updating function returned by the useState hook and we set the new product to "book", so from DVD to "book". 
// - Now what happens with that is not that DVD is instantly after SetNewProduct finishes execution is replaced. DVD is not instantly replaced just because SetNewProduct is done running. Instead, calling SetNewProduct, and calling those state updating functions in general schedules a state update with the data book.
// - Now that we have scheduled a state change, React becomes aware of it, React plans on processing it, But React doesn't process that immediately though. In reality most of the time, scheduled state changes will be processed very fast, pretty much instantly. So in reality, it might feel instant. If we click a button which removes a paragraph to us as a human, that happens instantly. But React reserves the right of actually postponing that state change.
// - For example - because a lot of other performance intensive tasks are going on at the same moment, potentially it asks that, React considers them to have a higher priority. Let's say on your screen, you have a input field where the user is able to type something. Reacting to that user input would have a higher priority than changing some text on the screen.  And for reasons like that, React might postpone scheduled state changes.
// - Now, what React does is, it guarantees you that the order of state changes for one in the same type of state is guaranteed. So if we call setNewProduct again and we set this to "carpet" then this state change would not be performed before the previous state change. So the order is kept, but it's not necessarily executed immediately.
// - Eventually of course it will be processed and your new state will be "Book". And once that new state is active, once that state change was processed, React will reevaluate the component, it will re-run the component function. 
// - Now, because of that scheduling where of course you might have multiple outstanding scheduled state changes at the same time, because of that, because multiple updates can be scheduled at the same time,
// it is recommended that you use this function form of updateStateFunction() for updating your state if you depend on the previous state snapshot. In a lot of cases, this will probably not matter because it's processed so quickly that you can't even click fast enough to see a delay but because it theoretically could be postponed, this is the safe way of ensuring that state changes are processed in order and for every state change where you depend on the previous state, you get the latest state. Otherwise you might just get the latest state when the component function was executed last, which is not necessarily the same state as if the state changes are executed in order. Because if you have multiple outstanding state changes, they all come from the same last re-render cycle of that app component.
// - That's why the function form of useState's updateStateChange is helpful because there React will actually ensure that for every outstanding state change, it looks into the latest state and gives you that and does not use the latest state from the last time the component was re rendered. That's an important difference between when the component was re-rendered and when a state change was scheduled. You can have multiple outstanding state changes from one and the same component re-evaluation.

// - State Batching -
// NOTE: If we have two state updated backtoback in a synchronous code then react will batch those changes in a single state schedule in a single re-evalution cycle. So for example, in one function that executes start to end without any callbacks or promises in between, in such cases React will take all the state updates that are produced by that function and it will batch them together into one state update.