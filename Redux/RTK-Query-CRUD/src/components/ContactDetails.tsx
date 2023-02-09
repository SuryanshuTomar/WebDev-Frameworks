import {
	useDeleteContactMutation,
	useGetContactQuery,
} from "../api/contactsApi";

const ContactDetails = ({ id }: { id: string }) => {
	const [deleteContact] = useDeleteContactMutation();
	const { data: contact } = useGetContactQuery(id);

	const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
		await deleteContact(id);
	};

	return (
		<div>
			<pre>{JSON.stringify(contact, undefined, 2)}</pre>
			<button onClick={handleDelete}>Delete Contact</button>
			<button>Edit Contact</button>
		</div>
	);
};
export default ContactDetails;
