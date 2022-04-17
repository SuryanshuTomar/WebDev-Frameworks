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