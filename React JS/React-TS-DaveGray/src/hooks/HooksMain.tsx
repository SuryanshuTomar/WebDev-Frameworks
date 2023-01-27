import {
	useState,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	MouseEvent,
	KeyboardEvent,
} from "react";
import Counter from "./UseReducer/Counter";

type User = {
	id: number;
	username: string;
};

type FibFunc = (num: number) => number;

const getFibonnaci: FibFunc = (num) => {
	if (num < 2) return num;
	return getFibonnaci(num - 1) + getFibonnaci(num - 2);
};

const myNum: number = 37;

// Component Starts Here
const HooksMain = () => {
	const [count, setCount] = useState<number>(0);
	const [users, setUsers] = useState<User[] | null>(null);

	// const inputRef = useRef<HTMLInputElement>(null!);
	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef?.current);
	console.log(inputRef?.current?.value);

	useEffect(() => {
		console.log("Mounting");
		console.log("Users: ", users);

		return () => {
			console.log("Unmounting");
		};
	}, [users]);

	const addTwo = useCallback(
		(
			e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
		): void => setCount((prev) => prev + 2),
		[]
	);

	const result = useMemo<number>((): number => getFibonnaci(myNum), [myNum]);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={addTwo}>Add</button>
			<h4>
				Fib of {myNum} is {result}
			</h4>
			<input type="text" ref={inputRef} />
			<br /> <br />
			<hr />
			<br />
			{/* UseReducer Hook */}
			<Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
		</div>
	);
};

export default HooksMain;
