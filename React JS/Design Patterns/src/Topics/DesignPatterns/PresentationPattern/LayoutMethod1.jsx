/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

const LayoutMethod1 = ({
	left: Left,
	right: Right,
	leftWeight = 1,
	rightWeight = 1,
}) => {
	return (
		<div className={styles.layoutContainer}>
			<div className={styles.leftContainer} style={{ flex: leftWeight }}>
				<Left />
			</div>
			<div className={styles.rightContainer} style={{ flex: rightWeight }}>
				<Right />
			</div>
		</div>
	);
};
export default LayoutMethod1;
