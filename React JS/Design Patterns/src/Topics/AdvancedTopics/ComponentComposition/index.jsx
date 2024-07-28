import Dashboard from "./Dashboard";
import Welcome from "./Welcome";

const ComponentComposition = () => {
	const username = "Alex Mercer";

	return (
		<div>
			<Dashboard>
				{/* Even though there is the parent will render when the count 
      state will change but the child component "Welcome" will not rerender and it will give performance boost. */}
				<Welcome>
					<h2>Hello {username}</h2>
					<p>Welcome Back!</p>
				</Welcome>
			</Dashboard>
		</div>
	);
};

export default ComponentComposition;
