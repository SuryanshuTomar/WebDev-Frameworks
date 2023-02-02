import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // directory name where this apiSlice is located in folder structure
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }), // baseURL
	tagTypes: ["Todos"], // queryKey or tagTypes
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => "/todos",
			// transforms the response we are getting from this query and then provide the data to the custom hook returned by the createApi
			transformResponse: (response) => response.sort((a, b) => b.id - a.id),
			// set the tag for the current query
			providesTags: ["Todos"],
		}),
		addTodo: builder.mutation({
			query: (todo) => {
				return {
					url: "/todos",
					method: "POST",
					body: todo,
				};
			},
			// invalidates cache data for current mutation and trigger query with tag "Todos"
			invalidatesTags: ["Todos"],
		}),
		updateTodo: builder.mutation({
			query: (todo) => {
				return {
					url: `todos/${todo.id}`,
					method: "PATCH",
					body: todo,
				};
			},
			// invalidates cache data for current mutation and trigger query with tag "Todos"
			invalidatesTags: ["Todos"],
		}),
		deleteTodo: builder.mutation({
			query: ({ id }) => ({
				url: `todos/${id}`,
				method: "DELETE",
				body: id,
			}),
			// invalidates cache data for current mutation and trigger query with tag "Todos"
			invalidatesTags: ["Todos"],
		}),
	}),
});

// createApi will return a custom hook for the endpoints based on the endpoints functions we have defined in the endpoints methods
export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = apiSlice;
