/* eslint-disable react/prop-types */
const Multiply = ({ value, data }) => {
	const { factor } = data;
	return <div>Multiplied value is : {value * factor}</div>;
};
export default Multiply;
