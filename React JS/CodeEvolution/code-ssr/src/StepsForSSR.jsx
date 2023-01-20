// STEPS =>

import dist from "@vitejs/plugin-react";

// github for step : https://github.com/anil-sidhu/react-ssr-with-routing

// Some Changes in above github steps :
// For Step1: In the main.jsx or index.jsx File, render the root element using the ReactDOM.hydrate() method instead of using the ReactDOM.render() method.
// For Server Folder:
//    1. File Extension should be cjs(common js) if you are using vite otherwise it will treated as an ESModule File.
//    2. If you are using vite to build the react application then, also change file path that is serving the html page from build folder to dist (distribution) folder as vite builds the files in the dist folder

