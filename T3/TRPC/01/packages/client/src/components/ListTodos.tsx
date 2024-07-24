import { trpc } from "../lib/trpc";

export type Todo = {
	title: string;
	id: string;
	isCompleted: boolean;
	createdAt: string;
	updatedAt: string;
};

export default function ListTodos() {
	const deleteTodo = trpc.todo.delete.useMutation();
	const updateTodo = trpc.todo.update.useMutation();
	const trpcContext = trpc.useUtils();

	function handleDelete(todo: Todo) {
		deleteTodo.mutate(
			{
				id: todo.id,
			},
			{
				onSuccess: () => {
					console.log("Todo deleted successfully!");
					trpcContext.todo.list.invalidate();
				},
			}
		);
	}

	function handleUpdate(todo: Todo) {
		updateTodo.mutate(
			{
				id: todo.id,
				isCompleted: !todo.isCompleted,
			},
			{
				onSuccess: () => {
					console.log("Todo updated successfully!");
					trpcContext.todo.list.invalidate();
				},
			}
		);
	}

	const response = trpc.todo.list.useQuery();

	let content;
	if (response.isLoading) {
		content = <div>Loading...</div>;
	} else if (response.isError) {
		content = <div>{response.error.message}</div>;
	} else {
		content = (
			<ul className="">
				{response.data.length > 0 ? (
					response.data.map((todo) => (
						<li
							key={todo.id}
							className="flex justify-between items-center bg-gray-100 py-2 px-3 rounded-md space-x-2"
						>
							<p>{todo.title}</p>

							<button
								className="text-white bg-green-600 px-2 py-1 rounded text-sm hover:line-through cursor-pointer hover:text-black"
								onClick={() => handleUpdate(todo)}
							>
								{todo.isCompleted ? "Complete" : "Incomplete"}
							</button>

							<button
								onClick={() => handleDelete(todo)}
								className="text-red-500 hover:text-white hover:bg-red-500 p-1 rounded"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</button>
						</li>
					))
				) : (
					<div>Yet to create any todo</div>
				)}
			</ul>
		);
	}

	return content;
}
