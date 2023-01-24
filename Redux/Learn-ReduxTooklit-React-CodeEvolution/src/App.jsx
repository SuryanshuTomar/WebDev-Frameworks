import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamVIew from "./features/icecream/IcecreamVIew";
import UserView from "./features/user/UserView";

function App() {
	return (
		<div className="App">
			<h1>Redux Toolkit React</h1>
			<CakeView /> <br />
			<hr />
			<br />
			<IcecreamVIew /> <br />
			<hr />
			<br />
			<UserView />
		</div>
	);
}

export default App;
