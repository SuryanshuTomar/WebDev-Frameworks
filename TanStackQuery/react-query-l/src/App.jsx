import { QueryClientProvider, QueryClient } from "react-query";

import "./App.css";

import Charachters from "./components/Charachters";
import CharachtersUsingAxios from "./components/CharachtersUsingAxios";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			{/* <CharachtersUsingAxios /> */}

			<QueryClientProvider client={queryClient}>
				<Charachters />
			</QueryClientProvider>
		</div>
	);
}

export default App;
