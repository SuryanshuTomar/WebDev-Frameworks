// => WHAT IS REACT ROUTER?

// - It is a fully featured client and server-side routing library for React.
// - It helps create and navigate between different URLs that make up your web application

// STEPS TO USE REACT ROUTER -
// Step 1- Import the BrowserRouter Element from the react-router-dom and enclose our main app component within the BrowserRouter Element in the index.js file. This will context browser url path to our react app
// Syntax -
{
	/* <BrowserRouter>
	<App />
</BrowserRouter>; */
}

// Step 2- Import Routes and Route in the app component. Routes Element will define all the Route element and within the Route element we will define the path and element that is to be rendered when used the defined path.
// Syntax -
{
	/* <Routes>
	<Route path="/path" element={<App />} />
</Routes>; */
}

// Step 3- If we want to access an route via links, then we can use Link element tag or NavLink element tag to route to a certain path(NavLink and Link are replacement to anchor tag). Difference between Link and NavLink is that NavLink provides us with active class attached to the active link which gives us the freedom to style the active link. We can either style the active link using css styles or using inline JS function attached to the style attribute of the NavLink and NavLink provides us with isActive attribute to the JS function parameter which we can destructure is directly in the parameters of the JS function.
// Note : NavLinks are majorly used in navbars, cards breadcrumbs etc where its crucial to highlights the links in the UI.
// Syntax -
// <Nav to="/path"></Nav>;

// const styleFn = ({isActive}) = {
//    return {
//       background: "blue",
//    }
// }
// <NavLink style={styleFn} to="/path"></NavLink>

// ---------------------------------------------------------------------------------
// - Navigating Programmatically -

// - If we want navigate programmatically or navigate when an event occures then we can use useNavigate() Hook provided by the react-router-dom.
// - The useNavigate() Hook returns a functions and by using this function we can navigate to some other url
// Syntax -
// const navigateFn = useNavigate();
// navigateFn("relativePath", OptionsObject)
// eg - navigate(-1, {replace: true})

// Note :
// - We can either pass "relative path" to navigate withing websites to the navigate() function or we can pass -1 to it argument to go back to previous page or +1 to go to the next page.
