import React, { useState } from "react";
import { MemoisedChildA } from "./ContextChildren";

export const countContext = React.createContext();
const CountProvider = countContext.Provider;

export const ContextParent = ({ children }) => {
	const [count, setCount] = useState(0);
	console.log("ContextParent Render");
	return (
		<>
			<CountProvider value={count}>
				<button onClick={() => setCount((c) => c + 1)}>Count</button>
				{/* <MemoisedChildA /> */}
				{children}
			</CountProvider>
		</>
	);
};
