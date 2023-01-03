// => NEXT JS INTRO AND BASICS -

import { element } from "prop-types";
import { getStaticProps } from "./pre-rendering/next-js/pages/users";

// - NEXT 12 and Before -

// -----------------------------------------------------------------------------------------------------
// => ROUTING SECTION -

// 1. Routing in a React APP -
//    I. Install a thrid party package
//    II. routes.js file to configure the routes.
//    III. For each route, create a component file, export the component, import it in routes.js and configure the new route with a path property.

// 2. Routing in Next APP -
//    I. File-System based routing mechanism.
//    II. When a file is added to pages folder in a project, it automatically becomes available as a route.
//    III. By mixing and matching file names with a nested folder structure, it is possible to pretty much define the most common routing patterns.

// - Routing Documentation -
// https://nextjs.org/docs/routing/introduction

// -----------------------------------------------------------------------------------------------------
// => PRE-RENDERING AND DATA FETCHING SECTION -

// -> Pre-Rendering -
// - Pre-rendering refers to the process of generating HTML with the necessary data for a page in our application.
// - NextJS Generates HTML for each page in advance instead of having it all done by client-side Javascript
// - In the React App, the javascript is loaded first which then executes to mount the HTML elements onto the DOM. So, when the page is served, we just have DIV tag with id="root" and once the javascript for the page is loaded it will execute in the browser, create the different nodes and mount them onto the "root" DIV element. This process is also called HYDRATION.
// - In the Next App, the pages are PRE-RENDERED or in simpler words the HTML is for the page is already generated with the necessary data and then it is sent to the browser. The javascript would then load and make the page interactive but the HTML is there to begin with.
// - So, Pre-render just means render in advance before sending it to the browser.
// - Pre-rendering is done by default in a NextJS App.

// -> Why Pre-Render ?
// 1. Pre-rendering improves performance -
//    - In a React App, we need to wait for the javascript to be executed before we see any result on a page.
//    - Perhaps fetch data from an external API and then render the UI.
//    - So, there is a wait time for the user.
//    - But, with a pre-rendered page, the HTML is already generated and load faster.

// 2. Pre-rendering helps with SEO -
//    - For application Like Blog or an E-Commerce App, SEO is a concern.
//    - With a React app, if a search engine hits your page, it only sees a DIV tag with id="root"
//    - But if search engine hits a pre-rendered page, all the content is present in the source code which will help index that page leading to better search rankings.

// -> Types of Pre-Rendering -
// 1. Static Generation -
//    A. without data (SG)-
//    (Static Generation) -> automatically rendered as static HTML (uses no props)

//    B. with data (SSG)-
//    (Static Site Generation) -> automatically rendered as static HTML + JSON (uses getStaticProps())

//    C. Increamental Static Regeneration (ISR) -
//    (ISR) -> It uses revalidate in getStaticProps().

//    D. Dynamic Parameters when Fetching Data

// 2. Server-Side Rendering -
//    - data fetching

// -> Client Side Data Fetching.
// -> Combining pre-rendering with client-side data fetching.

// 1. -> Static Generation -
//    - A method of pre-rendering where the HTML pages are generated at BUILD-TIME.
//    - The HTML with all the data that makes up the content of the web page are generate in advance when you build your application.
//    - It is recommended to pre-render pages whenever possible because with this method pages can be built once, cached by CDN and served to the client almost instantly.
//    - Examples where to use it - Blog pages, e-commerce product pages, documentation and marketing pages.
//    - NextJS, by default will pre-render every page in our app.
//    - The HTML for every page will automatically be statically generated when we build our application.

// Question - But aren't we first running the application in the developement mode when creating the application and since nextjs pre-renders every page at build-time then how it is generating pre-rendered pages in developement mode ?
// Answer -
// i. Production Server - An optimised build is created once you deploy the build(create the build). You don't make any code changes on the go once its deployed.
// ii Development Server - We should be able to make changes in our code and we want the code to immediatedly reflect in the browser.
// - So, nextjs team decided -
// iii. For production builds - a page will pre-rendered once when we run the build command.
// iv. But in developement mode - a page will be pre-rendered for every request we are going to make.

// -> Static Generation without Data -
// - By default it is done by the next js when we are not doing loading or fetching data from external sources to the page.

// -> Static Generation with Data -
// - It is done using the async method getStaticProps() which runs after the page is pre-rendered.
// - This method is used to fetch data or for any other asynchronous task and then it returns an object with a key "props" which is also an object with the result data we want to load in to our page.
// - The returned object from the getStaticProps() method is then passed as props to the page main component and then can be used to in the page later.

// Note -
// 1. getStaticProps() runs only on the server-side and this function will never run on client-side. and that's we even if try to print any thing in this function, will be seen in the terminal and not in the console of browser only after hard-reload of the page. Infact, the code we write inside the getStaticProps() won't even be included in the JS bundle that is sent to the browser.
// 2. This means, we can write server-side code directly in getStaticProps(). So, Accessing the file system using fs module or querying a database can be done inside getStaticProps().
// 3. getStaticProps() is allowed only in a file from the pages folder and cannot be run from a regular component file. It is used for pre-rendering and not client-side data fetching.
// 4. getStaticProps will run at build time in production. But during development, getStaticProps runs on every request.
