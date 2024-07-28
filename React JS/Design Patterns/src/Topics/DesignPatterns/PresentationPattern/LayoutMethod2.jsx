import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
const LayoutMethod2 = ({ children, leftWeight = 1, rightWeight = 1 }) => {
	const [left, right] = children;

	return (
		<div className={styles.layoutContainer}>
			<div className={styles.leftContainer} style={{ flex: leftWeight }}>
				{left}
			</div>
			<div className={styles.rightContainer} style={{ flex: rightWeight }}>
				{right}
			</div>
		</div>
	);
};
export default LayoutMethod2;
