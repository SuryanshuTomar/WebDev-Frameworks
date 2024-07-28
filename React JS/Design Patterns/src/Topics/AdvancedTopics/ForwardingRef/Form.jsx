import { forwardRef } from "react";
import styles from "./style.module.css";

// eslint-disable-next-line react/prop-types, react/display-name
const Form = forwardRef(({ name, setName, submitHandler }, ref) => {
	return (
		<form className={styles.formContainer} onSubmit={submitHandler}>
			<label htmlFor="name">
				<input
					ref={ref}
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</label>
			<br />
			<button>Submit</button>
		</form>
	);
});

export default Form;
