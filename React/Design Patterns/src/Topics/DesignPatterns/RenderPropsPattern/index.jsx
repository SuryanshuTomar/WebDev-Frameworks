import Display from "./Display";
import Input from "./Input";
import Multiply from "./Multiply";

const RenderPropsPattern = () => {
	return (
		<div>
			<h2>RenderPropsPattern</h2>

			<h4>Type 1</h4>
			<Input
				renderBelow={Display}
				initialValue={""}
				inputId={"simpleText"}
			/>
			<br />
			<hr />
			<br />

			<h4>Type 2</h4>
			<Input
				renderBelow={Multiply}
				initialValue={0}
				inputType="number"
				data={{ factor: 15 }}
			/>
		</div>
	);
};
export default RenderPropsPattern;
