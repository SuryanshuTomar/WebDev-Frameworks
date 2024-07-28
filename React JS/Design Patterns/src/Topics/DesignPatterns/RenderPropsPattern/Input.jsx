import { useState } from "react";

/* eslint-disable react/prop-types */
const Input = ({
	initialValue,
	renderBelow,
	inputId,
	inputType = "text",
	data,
}) => {
	const [value, setValue] = useState(initialValue);

	return (
		<div>
			<label htmlFor={inputId}>
				<input
					type={inputType}
					id={inputId}
					name={inputId}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
			{renderBelow({ value, data })}
		</div>
	);
};
export default Input;
