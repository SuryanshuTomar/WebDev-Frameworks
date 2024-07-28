import { GRID_DIMENSIONS } from "../config/constants";

export const gridSketch = ({
	p5,
	gridArray,
	gridSize,
	cellWidth,
	cellHeight,
}) => {
	p5.setup = () => {
		p5.canvas.classList.add("interactiveGrid");
		p5.createCanvas(GRID_DIMENSIONS.width, GRID_DIMENSIONS.height);
	};

	p5.draw = () => {
		p5.background(250);
		p5.strokeWeight(1);
		p5.stroke("white");
		for (let x = 0; x < gridSize; x++) {
			for (let y = 0; y < gridSize; y++) {
				const grid = gridArray?.[x]?.[y];
				grid.display(p5);
			}
		}
	};

	p5.mousePressed = (event) => {
		const isCanvasElement =
			event.target.classList.contains("interactiveGrid");
		if (isCanvasElement) {
			let mouseX = p5.mouseX;
			let mouseY = p5.mouseY;

			const cellXCoord = Math.floor(mouseX / cellWidth);
			const cellYCoord = Math.floor(mouseY / cellHeight);

			gridArray[cellXCoord][cellYCoord].color = [
				p5.random(255),
				p5.random(255),
				p5.random(255),
			];
		}
	};
};

// const clickedOnCanvas =
// 	cellXCoord < GRID_SIZE &&
// 	cellXCoord >= 0 &&
// 	cellYCoord < GRID_SIZE &&
// 	cellYCoord >= 0;
