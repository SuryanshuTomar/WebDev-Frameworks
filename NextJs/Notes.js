// => NEXT JS INTRO AND BASICS -

import { element } from "prop-types";

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
//    - without data
//    - with data
//    - Increamental Static Generation
//    - Dynamic Parameters when Fetching Data

// 2. Server-Side Rendering -
//    - data fetching

// -> Client Side Data Fetching.
// -> Combining pre-rendering with client-side data fetching.
