import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// cLient side rendering
// const root = ReactDOM.createRoot(rootElem);
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

// server side rendering
// Method 1:
const rootElem = document.getElementById("root");
// ReactDOM.hydrate(<App />, rootElem);

// Method 2: Recommended from react 18
ReactDOM.hydrateRoot(rootElem, <App />);
