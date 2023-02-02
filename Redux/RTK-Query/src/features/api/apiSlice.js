import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // directory name where this apiSlice is located in folder structure
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }), // baseURL
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => "/todos",
		}),
	}),
});

// createApi will return a custom hook for the endpoints based on the endpoints functions we have defined in the endpoints methods
export const { useGetTodosQuery } = apiSlice;
