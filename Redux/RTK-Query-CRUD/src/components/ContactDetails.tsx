import { useGetContactQuery } from "../api/contactsApi";

const ContactDetails = ({ id }: { id: string }) => {
	const { data: contact } = useGetContactQuery(id);
	return <pre>{JSON.stringify(contact, undefined, 2)}</pre>;
};
export default ContactDetails;
