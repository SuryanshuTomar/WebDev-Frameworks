import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
	reducerPath: "contactsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
	tagTypes: ["contacts"],
	endpoints: (builder) => {
		return {
			getContacts: builder.query<Contact[], void>({
				query: () => "/contacts",
				transformResponse: (response: Contact[]) =>
					response.sort(
						(a: Contact, b: Contact) => parseInt(b.id) - parseInt(a.id)
					),
				providesTags: ["contacts"],
			}),
			getContact: builder.query<Contact, String>({
				query: (id) => `/contacts/${id}`,
			}),
			addContact: builder.mutation<void, Contact>({
				query: (contact) => ({
					url: "/contacts",
					method: "POST",
					body: contact,
				}),
				invalidatesTags: ["contacts"],
			}),
			updateContact: builder.mutation<void, Contact>({
				query: ({ id, ...contact }) => ({
					url: `/contacts/${id}`,
					method: "PUT",
					body: contact,
				}),
				invalidatesTags: ["contacts"],
			}),
			deleteContact: builder.mutation<void, string>({
				query: (id) => {
					return {
						url: `/contacts/${id}`,
						method: "DELETE",
					};
				},
				invalidatesTags: ["contacts"],
			}),
		};
	},
});

// export reducer
export default contactsApi.reducer;

export const {
	useGetContactsQuery,
	useGetContactQuery,
	useAddContactMutation,
	useUpdateContactMutation,
	useDeleteContactMutation,
} = contactsApi;
