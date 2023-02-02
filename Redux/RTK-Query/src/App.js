import { lazy, Suspense } from "react";

// import TodoList from "./features/todos/TodoList";
const TodoList = lazy(() => import("../src/features/todos/TodoList.js"));

function App() {
	return (
		<Suspense fallback={<h2>Loading App...</h2>}>
			<TodoList />
		</Suspense>
	);
}

export default App;
