import Form from "./component/Form";
import AuthContextProvider from "./context/AuthContext";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<Form />
			</AuthContextProvider>
		</div>
	);
}

export default App;
