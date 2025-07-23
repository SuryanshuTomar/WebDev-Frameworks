import { createContext, useReducer } from "react";

const initialCounterState = {
	count: 0,
};

const initialCounterContext = {
	counter: initialCounterState,
	dispatch: () => {},
};

export const CounterContext = createContext(initialCounterContext);
const CounterContextProvider = CounterContext.Provider;

const counterReducer = (state, action) => {
	switch (action.type) {
		case "increment": {
			return {
				...state,
				count: state.count + action.value ?? 1,
			};
		}
		case "decrement": {
			return {
				...state,
				count: state.count - action.value ?? 1,
			};
		}
		case "reset": {
			return {
				count: 0,
			};
		}
	}
};

// eslint-disable-next-line react/prop-types
export const CounterContextComponent = ({ children }) => {
	const [counter, dispatch] = useReducer(counterReducer, initialCounterState);

	return (
		<CounterContextProvider value={{ counter, dispatch }}>
			{children}
		</CounterContextProvider>
	);
};
