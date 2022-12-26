export default function User({ user }) {
	return (
		<>
			<p>Username: {user.name}</p>
			<p>Email: {user.email}</p>
			<br />
		</>
	);
}
