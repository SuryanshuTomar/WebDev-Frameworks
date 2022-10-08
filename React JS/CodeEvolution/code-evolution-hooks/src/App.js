import ParentComp from "./components/PureComponentsFunction/ParentComp";
import HookCounter from "./components/useState/HookCounter";
import HookCounterArray from "./components/useState/HookCounterArray";
import HookCounterObject from "./components/useState/HookCounterObject";
import HookCounterPrevState from "./components/useState/HookCounterPrevState";

function App() {
	return (
		<div className="App">
			{/* <HookCounter /> */}
			{/* <HookCounterPrevState /> */}
			{/* <HookCounterObject /> */}
			<HookCounterArray />

			{/* <ParentComp /> */}
		</div>
	);
}

export default App;
