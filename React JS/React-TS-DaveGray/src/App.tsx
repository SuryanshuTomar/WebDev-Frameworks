import { useState } from "react";

import Counter from "./components/Counter";
import { Heading } from "./components/Heading";
import List from "./components/List";
import { Section } from "./components/Section";

function App() {
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<Heading title={"React + Typescript"} />
			<Section title="Title for Section">This is my Section</Section>
			<Counter setCount={setCount}>Count is : {count}</Counter>
			<List
				items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
				render={(item: string) => <span className="gold">{item}</span>}
			/>
		</div>
	);
}

export default App;
