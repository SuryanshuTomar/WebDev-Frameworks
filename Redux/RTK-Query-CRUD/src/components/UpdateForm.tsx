import { useState } from "react";
import {
	useAddContactMutation,
	useUpdateContactMutation,
} from "../api/contactsApi";
import { Contact } from "../models/contact.model";

const UpdateForm = ({ contact }: { contact: Contact }) => {
	const [updateContact] = useUpdateContactMutation();

	const [form, setForm] = useState<Contact>({
		id: contact.id,
		name: "",
		email: "",
		phone: "",
	});

	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		await updateContact(form);
	};

	const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prevForm) => ({
			...prevForm,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				name="name"
				value={form.name}
				onChange={formHandler}
			/>{" "}
			<br /> <br />
			<label htmlFor="email">Email: </label>
			<input
				type="text"
				name="email"
				value={form.email}
				onChange={formHandler}
			/>{" "}
			<br /> <br />
			<label htmlFor="phone">Phone: </label>
			<input
				type="tel"
				name="phone"
				value={form.phone}
				onChange={formHandler}
			/>{" "}
			<br /> <br />
			<button>Add Contact</button>
		</form>
	);
};
export default UpdateForm;
