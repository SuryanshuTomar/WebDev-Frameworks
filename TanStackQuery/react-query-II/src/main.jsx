import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// React Query Client and React Query Client Provider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query Dev Tools for Browser
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create the Query Client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Providing the client={queryClient} to our App using the QueryClientProvider */}
		{/* Because without the queryClient we cannot use React Query inside our App */}
		<QueryClientProvider client={queryClient}>
			<App />

			{/* This will display React Query Dev Tools in browser for us */}
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
