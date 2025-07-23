import { forwardRef } from "react";
import styles from "./style.module.css";

// eslint-disable-next-line react/prop-types, react/display-name
const Dialog = forwardRef(({ children, isModalOpen, handleClose }, ref) => {
	return (
		<dialog
			className={isModalOpen ? styles.dialogContainer : ""}
			ref={ref}
			onClick={handleClose}
		>
			<div className={styles.dialogBody}>
				<h4>Info</h4>
				{children}
				<button onClick={handleClose}>Close</button>
			</div>
		</dialog>
	);
});

export default Dialog;
