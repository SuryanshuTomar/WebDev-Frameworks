import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./lib/trpc";
import { httpBatchLink } from "@trpc/client";

const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: "http://localhost:3000/trpc",
		}),
	],
});

const TRPCProvider = trpc.Provider;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TRPCProvider queryClient={queryClient} client={trpcClient}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</TRPCProvider>
	</React.StrictMode>
);
