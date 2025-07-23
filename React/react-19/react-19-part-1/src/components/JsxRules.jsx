const JsxRules = () => {
	return (
		<div>
			<h1>JSX Rules</h1>
			<p>
				JSX must return a <strong>single parent element</strong>.
			</p>
			<p>
				JSX elements must be <strong>properly closed</strong>.
			</p>
			<p>
				JSX attributes are written using <strong>camelCase</strong> (e.g.,{" "}
				<em>`className`</em>
				instead of <em>`class`</em> or <em>`htmlFor`</em> instead of{" "}
				<em>`for`</em>
				attributes)
			</p>
		</div>
	);
};
export default JsxRules;
