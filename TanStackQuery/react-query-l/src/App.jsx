import { QueryClientProvider, QueryClient } from "react-query";
import Charachters from "./components/Charachters";
import CharachtersUsingAxios from "./components/CharachtersUsingAxios";
import "./App.css";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Rick and Morty</h1>
				<QueryClientProvider client={queryClient}>
					<Charachters />
				</QueryClientProvider>
			</div>
		</div>
	);
}

export default App;
