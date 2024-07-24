import { useState } from "react";
import { trpc } from "../lib/trpc";

export default function AddTodo() {
	const [title, setTitle] = useState("");

	const addTodoMutation = trpc.todo.create.useMutation();
	const trpcContext = trpc.useUtils();

	const createTodo = () => {
		addTodoMutation.mutate(
			{
				title: title,
			},
			{
				onSuccess: () => {
					console.log("Todo added successfully!");
					trpcContext.todo.list.invalidate();
				},
			}
		);
		setTitle("");
	};

	return (
		<div className="flex justify-between space-x-4">
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				type="text"
				placeholder="Get milk..."
				className="flex-grow rounded-md"
			/>
			<button
				onClick={createTodo}
				className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white py-1 px-3 rounded-md"
			>
				Add todo
			</button>
		</div>
	);
}
