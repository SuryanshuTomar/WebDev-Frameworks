import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
	console.log("APP EXECUTED !!");
	const [showPara, setShowPara] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	const toggleParaHandler = useCallback(() => {
		if (allowToggle) {
			setShowPara((showPara) => !showPara);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle((allowToggle) => !allowToggle);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			{/* It doesn't matter if the state, props or context changes in the child component if a parent component is re-evaluated then all of its child components will be re-evaluated too. */}
			<DemoOutput show={showPara} />
			<Button onClick={allowToggleHandler}>Allow Toggle</Button>
			<Button onClick={toggleParaHandler}>Toggle Paragraph !</Button>
		</div>
	);
}

export default App;
