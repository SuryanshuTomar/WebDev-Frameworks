import CanvasMaze from "./components/CanvasMaze";
import Container from "./components/Container";
import { GridCanvas } from "./components/InteractiveCanvas";

const PathFinder = () => {
	return (
		<div>
			{/* <Container rows={10} columns={10} /> */}
			{/* <CanvasMaze /> */}
			<GridCanvas />
		</div>
	);
};
export default PathFinder;
