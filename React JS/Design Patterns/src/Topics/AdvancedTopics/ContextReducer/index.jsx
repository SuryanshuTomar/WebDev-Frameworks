import { CounterContextComponent } from "./CounterContext";
import ManageCounter from "./ManageCounter";

const ContextReducer = () => {
	return (
		<CounterContextComponent>
			<ManageCounter />
		</CounterContextComponent>
	);
};
export default ContextReducer;
