import { GRID_DIMENSIONS } from "../config/constants";

export class Grid {
	#grid = [];
	constructor(gridSize) {
		this.gridSize = gridSize;
		this.cellWidth = GRID_DIMENSIONS.width / gridSize;
		this.cellHeight = GRID_DIMENSIONS.height / gridSize;
	}

	get grid() {
		return this.#grid;
	}

	setupGrid() {
		for (let x = 0; x < this.gridSize; x++) {
			const column = [];
			for (let y = 0; y < this.gridSize; y++) {
				const cell = new Cell(
					x * this.cellWidth,
					y * this.cellHeight,
					this.gridSize,
					this.cellWidth,
					this.cellHeight
				);
				column.push(cell);
			}
			this.#grid.push(column);
		}
	}
}

export class Cell {
	cellSize = 5;
	constructor(x, y, gridSize, cellWidth, cellHeight) {
		this.x = x;
		this.y = y;
		this.gridSize = gridSize;
		this.cellWidth = cellWidth;
		this.cellHeight = cellHeight;
		this.color = [0, 0, 0];
	}

	display(p5) {
		p5.fill(this.color);
		p5.rect(this.x, this.y, this.cellWidth, this.cellHeight);
	}

	isClicked(px, py) {
		return (
			px > this.x &&
			px < this.x + this.cellWidth &&
			py > this.y &&
			py < this.y + this.cellHeight
		);
	}
}
