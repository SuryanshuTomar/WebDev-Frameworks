// eslint-disable-next-line react/prop-types
const Welcome = ({ children }) => {
	console.log("Welcome Rendered");
	return <div>{children}</div>;
};
export default Welcome;
