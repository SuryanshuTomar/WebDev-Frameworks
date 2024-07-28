import { Link, Outlet, useLocation } from "react-router-dom";

const DesignPatterns = () => {
	const { pathname } = useLocation();

	return (
		<div>
			<h2>Design Patterns</h2>
			<Link to="/">Back to Topics</Link>
			<br />
			<br />
			<hr />
			<br />
			{pathname === "/design-patterns" && (
				<>
					<Link to="presentation-pattern">Presentation Pattern</Link>
					<br />
					<br />
					<Link to="hoc-pattern">Higher Order Component(HOC) Pattern</Link>
					<br />
					<br />
					<Link to="compound-pattern">Compound Pattern</Link>
					<br />
					<br />
					<Link to="hooks-pattern">Hooks Pattern</Link>
					<br />
					<br />
					<Link to="render-props-pattern">Render Props Pattern</Link>
					<br />
					<br />
				</>
			)}
			<Outlet />
		</div>
	);
};
export default DesignPatterns;
