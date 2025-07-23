import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useState } from "react";
import { Grid } from "../classes/grid";
import { gridSketch } from "../sketches/gridSketch";
import {
	DEFAULT_GRID_SIZE,
	MAX_GRID_SIZE,
	MIN_GRID_SIZE,
} from "../config/constants";

export const GridCanvas = () => {
	const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
	const [gridInstance, setGridInstance] = useState(new Grid(gridSize));
	gridInstance.setupGrid();

	const handleGridSize = (event) => {
		setGridSize(event.target.value);
		const newGridInstance = new Grid(event.target.value);
		newGridInstance.setupGrid();
		setGridInstance(newGridInstance);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h2>Interactive Grid</h2>
			<div>
				<label htmlFor="noOfGrids">No of grids: </label>
				<input
					min={MIN_GRID_SIZE}
					max={MAX_GRID_SIZE}
					type="number"
					id="noOfGrids"
					value={gridSize}
					onChange={handleGridSize}
				/>
			</div>
			<ReactP5Wrapper
				sketch={(p5) =>
					gridSketch({
						p5: p5,
						gridArray: gridInstance.grid,
						gridSize: gridSize,
						cellWidth: gridInstance.cellWidth,
						cellHeight: gridInstance.cellHeight,
					})
				}
			/>
		</div>
	);
};
