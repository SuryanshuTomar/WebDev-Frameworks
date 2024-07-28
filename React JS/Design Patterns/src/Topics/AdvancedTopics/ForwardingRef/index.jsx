import { useRef } from "react";
import Form from "./Form";
import styles from "./style.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Dialog from "./Dialog";

const ForwardingRef = () => {
	const formRef = useRef(null);
	const dialogRef = useRef(null);

	const [name, setName] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (dialogRef !== null && dialogRef.current) {
			setIsModalOpen(true);
			dialogRef.current?.showModal();
		}
	};

	const handleModalClose = () => {
		if (dialogRef !== null && dialogRef.current) {
			dialogRef.current.close();
			setIsModalOpen(false);
		}
	};

	useEffect(() => {
		if (formRef !== null) {
			formRef.current?.focus();
		}
	}, []);

	return (
		<div className={styles.container}>
			<hr style={{ width: "500px" }} />
			<h3>Enter your info</h3>
			<Form
				ref={formRef}
				name={name}
				setName={setName}
				submitHandler={handleSubmit}
			/>
			<Dialog
				ref={dialogRef}
				isOpen={isModalOpen}
				handleClose={handleModalClose}
			>
				<p>Your name is {name}</p>
			</Dialog>
		</div>
	);
};
export default ForwardingRef;
