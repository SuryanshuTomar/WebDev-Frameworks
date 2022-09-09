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

// --------------------------------------------------------------------------------
// - Nested Routes -

// - This is one of the most powerful features of React Router making it so you don't have to mess around with complicated layout code. The vast majority of your layouts are coupled to segments of the URL and React Router embraces this fully.

// - Routes can be nested inside one another, and their paths will nest too (child inheriting the parent).

// - Article -
// https://reactrouter.com/docs/en/v6/getting-started/overview
// https://www.robinwieruch.de/react-router-nested-routes/

// -----------------------------------------------------------------------------------------
// - Dynamic Routes -

// - Dynamic Routing means that it takes place as our app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router.

// Example -
// Rest of the code remains same
{
	/* <Route path="posts" element={<Posts />}>
	<Route path="/" element={<PostLists />} />
	<Route path=":slug" element={<Post />} />
</Route>; */
}

// - How to access URL parameters and dynamic parameters of a route -
// - To visit the individual post by clicking the post title from the rendered list of blog posts, all you have to do is, wrap the title of each post within a Link component in the PostsLists component. Then, define the path to each post using the slug of each post. The /posts/ prefix allows the path in the web browser to be consistent:

// <ul>
//   {Object.entries(BlogPosts).map(([slug, { title }]) => (
//     <li key={slug}>
//       <Link to={`/posts/${slug}`}>
//         <h3>{title}</h3>
//       </Link>
//     </li>
//   ))}
// </ul>

// - Next, import a hook called useParams from the react-router-dom library. This hook allows you to access any dynamic parameters that a particular route (or slug, in this case) may have. The dynamic parameters for each slug are going to be the title and the description of each blog post. The need to access them is to display the content of each blog post when a particular slug of a blog post is triggered as the URL in the browser window:

// import {
//   // rest of the elements/components imported remain same
//   useParams
// } from 'react-router-dom';

// -  Create a new function component called Post. This component is going to get the current slug of the post from useParams hook. Using the bracket square notation syntax in JavaScript, a new post variable is created that has the value of the properties or the current contents of a blog post. Destructuring the contents of this post variable, you can render them:

// function Post() {
//   const { slug } = useParams();
//   const post = BlogPosts[slug];
//   const { title, description } = post;
//   return (
//     <div style={{ padding: 20 }}>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// -----------------------------------------------------------------------------------
// - Search Params -

// 1. myParams is used to get the search parameters using the get() method
// Syntax -
// myParams.get("paramsName");
// 2. setMyParams({paramsName: "paramsValue"})

// - Example -
// import React from "react";
// import { Link, Outlet, useSearchParams } from "react-router-dom";

// export const Users = () => {
// 	const [searchParams, setSearchParams] = useSearchParams();

// 	const showActiveUsers = searchParams.get("filter") === "active";
// 	return (
// 		<div>
// 			<Link to="1">
// 				<h3>User 1</h3>
// 			</Link>
// 			<Link to="2">
// 				<h3>User 2</h3>
// 			</Link>
// 			<Link to="3">
// 				<h3>User 3</h3>
// 			</Link>
// 			<Link to="admin">
// 				<h3>Admin</h3>
// 			</Link>

// 			<div>
// 				<button onClick={() => setSearchParams({ filter: "active" })}>
// 					Active Users
// 				</button>
// 				<button onClick={() => setSearchParams({})}>Reset Filter</button>
// 			</div>

// 			{showActiveUsers ? (
// 				<h2>Showing Active Users</h2>
// 			) : (
// 				<h2>Show All Users</h2>
// 			)}

// 			<Outlet />
// 		</div>
// 	);
// };

// ---------------------------------------------------------------------------------------------
// => CODE SPLITTING -

// - Traditionally, all the components in a Reac Application would be bundled into one single called bundle.js
// - This allows the browser to download the entire app once so that the use can navigate seamlessly without having the need to make another HTTP request to the server.
// - But as the applciation grew in size and more third party package were installed, the bundled size bloated up causing the app to have a long initial load time.
// - To Resolve this problem, A single bundle is split into smalelr ones and the user will only download the code that they need and this is what Code Splitting is.
// - EG- With an analytics website, if a user wants to navigate to their profile page and then log off, there is no need to download the bulky code related to the dashboard page.

