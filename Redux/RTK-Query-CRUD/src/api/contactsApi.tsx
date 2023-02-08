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
		};
	},
});

// export reducer
export default contactsApi.reducer;

export const { useGetContactsQuery } = contactsApi;
