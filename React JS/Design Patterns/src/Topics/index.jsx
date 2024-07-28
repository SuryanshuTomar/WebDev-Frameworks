import { Link } from "react-router-dom";

const Topics = () => {
	return (
		<div>
			<h2>Topics</h2>
			<Link to="advanced">Advanced Topics</Link>
			<br />
			<br />
			<Link to="design-patterns">Design Patterns</Link>
		</div>
	);
};
export default Topics;
