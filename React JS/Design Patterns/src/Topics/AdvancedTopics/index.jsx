import { Link, Outlet, useLocation } from "react-router-dom";

const AdvancedTopics = () => {
	const { pathname } = useLocation();

	return (
		<div>
			<h2>Advanced Topics</h2>
			<Link to="/">Back to Topics</Link>
			<br />
			<br />
			<hr />
			<br />
			{pathname === "/advanced" && (
				<>
					<Link to="context-reducer">Context Reducer</Link>
					<br />
					<br />
					<Link to="forwarding-ref">Forwarding Ref</Link>
					<br />
					<br />
					<Link to="component-composition">Component Composition</Link>
				</>
			)}
			<Outlet />
		</div>
	);
};
export default AdvancedTopics;
