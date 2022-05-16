import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<AuthContextProvider>
					<BookContextProvider>
						<Navbar />
						<BookList />
						<ToggleTheme />
					</BookContextProvider>
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
