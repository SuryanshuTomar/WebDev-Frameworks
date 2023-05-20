// => NEXT JS INTRO AND BASICS -

// 1. By Default, Every component in NextJs13 onwards is a React Server Component. That means these components are rendered server side and not on the client side.
// 2. If we want to render any component client side then we can use, "use client" directive can be used at the top of any component to make a nextjs13 component a React Client Component.
// 3. We can create a Next Js component by creating a page.js file in the app directory.
// 4. Nextjs uses file based routing, which means that every directory inside the app directory will be treated as a App Route and each directory should have a page.js file which will display the UI for that route.
// 5. We can also define the following for each directory in the app directory -
//       i. Error Boundary using error.js file
//       ii. Layout for that particular route in the app using layout.js file
//       iii. Loading UI component while the page is loading using the loading.js file.

// -----------------------------------------------------------------------------------------
// => The Next JS API -
// - There are two way in Next js using which we can create API Endpoints -
// 1. Create a route.js file for each route directory just like we are creating page.js file for each route directory. But, note that each directory can either have page.js file or route.js file. We can not put both, as nextjs will not be able to render both api route and app route.
// 2. Create an api folder inside the app directory, And Inside that directory, create a directory for which we want to create an api route just like we are creating for the app file based routing. And inside that directory create a new route.js file and write your route handlers. (Recommended Method for Creating API)

// Write route Handlers -
// By default Nextjs, supports the following HTTPs Methods -
// 1. GET
// 2. POST
// 3. PATCH
// 4. PUT
// 5. DELETE
// 6. HEAD
// 7. OPTIONS

// Example Syntax -
// export async function GET(request) {
// 	return new Response("Hello Nextjs!!");
// }

// -----------------------------------------------------------------------------------------
// => MetaData -

// - We can define Metadata in 2 ways :
// 1. Static Metadata
// 2. Dynamic Metadata

// 1. Static Metadata Example -
// export const metadata = {
// 	title: "HomePage",
// };

// Output ->
/*
<head>
   <title>HomePage</title>
</head>
*/

// export default function Page() {
// 	return <h1>Normal Next.js Homepage</h1>;
// }

// 2. Dynamic Metadata Example -
// export async function generateMetadata({ params, searchParams }) {
// 	const product = await getProduct(params.id);
// 	return { title: product.title };
// }

// Output ->
/*
<head>
   <title>My Unique Product</title>
</head>
*/

// export default function Page() {
// 	return <h1>Normal Next.js Homepage</h1>;
// }