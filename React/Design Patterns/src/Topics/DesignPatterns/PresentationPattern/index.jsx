import LayoutMethod1 from "./LayoutMethod1";
import LayoutMethod2 from "./LayoutMethod2";
import Left from "./Left";
import Right from "./Right";

const PresentationPattern = () => {
	return (
		<div>
			<h1>PresentationPattern</h1>
			<h3>Layout Method 1</h3>
			<LayoutMethod1
				left={Left}
				right={Right}
				leftWeight={1}
				rightWeight={2}
			/>
			<br />

			<h3>Layout Method 2</h3>
			<LayoutMethod2 leftWeight={2} rightWeight={1}>
				<Left />
				<Right />
			</LayoutMethod2>
		</div>
	);
};
export default PresentationPattern;
