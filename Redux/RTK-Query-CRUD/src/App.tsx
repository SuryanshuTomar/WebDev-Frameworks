import { useGetContactsQuery } from "./api/contactsApi";
import AddContactForm from "./components/AddContactForm";
import ContactDetails from "./components/ContactDetails";
import { Contact } from "./models/contact.model";
import { v4 as uuid } from "uuid";

function App() {
	const {
		data: contacts,
		isSuccess,
		isError,
		isLoading,
		isFetching,
		error,
	} = useGetContactsQuery();

	if (isLoading) return <h2>Loading...</h2>;
	else if (isFetching) return <h2>Fetching Contacts...</h2>;
	else if (isError)
		return <h2>Something went wrong...{JSON.stringify(error)}</h2>;
	else if (isSuccess)
		return (
			<div className="container">
				<div>
					<h2>Contacts</h2>
					{contacts.map((contact: Contact) => (
						<div key={contact.id}>
							<h3>Contact: {contact.id}</h3>
							<span>{contact.name}</span> &nbsp;
							<span>{contact.email}</span>
							<span>
								<ContactDetails id={contact.id} />
							</span>
							<hr />
						</div>
					))}
				</div>
				<div>
					<h2>Contact Form</h2>
					<AddContactForm id={uuid()} />
				</div>
			</div>
		);

	return <div>No Data Received</div>;
}
export default App;
