/* eslint-disable no-unused-vars */
let maze = document.querySelector(".maze");
let context = maze.getContext("2d");

let currentCell;

export class Maze {
	constructor(size, rows, columns) {
		this.size = size; // size in pixels
		this.rows = rows;
		this.columns = columns;
		this.grid = [];
		this.stack = [];
		this.isMazeCompleted = false;
		this.reset = false;
	}

	setup() {
		for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
			let currentRow = [];
			for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
				let cell = new Cell(rowIndex, columnIndex, this.grid, this.size);
				currentRow.push(cell);
			}
			this.grid.push(currentRow);
		}
		currentCell = this.grid[0][0];

		this.renderGrid();
	}

	resetGrid() {
		this.reset = true;
		this.grid = [];
		this.stack = [];
		this.isMazeCompleted = false;
		this.setup();
	}

	renderGrid() {
		maze.width = this.size;
		maze.height = this.size;
		maze.style.backgroundColor = "black";

		for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
			for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
				let currentGrid = this.grid;
				currentGrid[rowIndex][columnIndex].show(
					this.size,
					this.rows,
					this.columns
				);
			}
		}
	}

	draw() {
		if (this.reset) return;

		this.renderGrid();
		currentCell.isVisited = true;

		let next = currentCell.checkNeighbours();
		if (next) {
			next.isVisited = true;
			this.stack.push(currentCell);
			currentCell.highlightCell(this.columns);
			currentCell.removeWalls(currentCell, next, this.columns);
			currentCell = next;
		} else if (this.stack.length > 0) {
			currentCell = this.stack.pop();
			currentCell.highlightCell(this.columns);
		}

		if (this.stack.length > 0) {
			window.requestAnimationFrame(() => {
				this.draw();
			});
		} else {
			this.isMazeCompleted = true;
		}
	}
}

class Cell {
	constructor(rowNumber, columnNumber, parentGrid, parentSize) {
		this.rowNumber = rowNumber;
		this.columnNumber = columnNumber;
		this.parentGrid = parentGrid;
		this.parentSize = parentSize;
		this.isVisited = false;
		this.walls = {
			topWall: true,
			rightWall: true,
			bottomWall: true,
			leftWall: true,
		};
	}

	highlightCell(length) {
		let xCoord = (this.columnNumber * this.parentSize) / length + 1;
		let yCoord = (this.rowNumber * this.parentSize) / length + 1;

		context.fillStyle = "violet";
		context.fillRect(
			xCoord,
			yCoord,
			this.parentSize / length - 3,
			this.parentSize / length - 3
		);
	}

	checkNeighbours() {
		let grid = this.parentGrid;
		let row = this.rowNumber;
		let col = this.columnNumber;

		let neighbours = [];

		// Check if the current cell has a neighbour or not.
		let topNeighbour = row === 0 ? undefined : grid[row - 1][col];
		let rightNeighbour =
			col === grid.length - 1 ? undefined : grid[row][col + 1];
		let bottomNeighbour =
			row === grid.length - 1 ? undefined : grid[row + 1][col];
		let leftNeighbour = col === 0 ? undefined : grid[row][col - 1];

		if (topNeighbour && topNeighbour.isVisited === false)
			neighbours.push(topNeighbour);
		if (rightNeighbour && rightNeighbour.isVisited === false)
			neighbours.push(rightNeighbour);
		if (bottomNeighbour && bottomNeighbour.isVisited === false)
			neighbours.push(bottomNeighbour);
		if (leftNeighbour && leftNeighbour.isVisited === false)
			neighbours.push(leftNeighbour);

		if (neighbours.length > 0) {
			let random = Math.floor(Math.random() * neighbours.length);
			return neighbours[random];
		} else {
			return undefined;
		}
	}

	removeWalls(cell1, cell2, length) {
		let deltaX = cell1.columnNumber - cell2.columnNumber;

		if (deltaX === 1) {
			if (cell1.columnNumber < length) cell1.walls.leftWall = false;
			cell2.walls.rightWall = false;
		} else if (deltaX === -1) {
			cell1.walls.rightWall = false;
			if (cell2.columnNumber < length) cell2.walls.leftWall = false;
		}

		let deltaY = cell1.rowNumber - cell2.rowNumber;

		if (deltaY === 1) {
			cell1.walls.topWall = false;
			if (cell1.rowNumber < length) cell2.walls.bottomWall = false;
		} else if (deltaY === -1) {
			if (cell2.rowNumber < length) cell1.walls.bottomWall = false;
			cell2.walls.topWall = false;
		}
	}

	drawTopWall(xCoord, yCoord, size, _noOfRows, noOfColumns) {
		context.beginPath();
		context.moveTo(xCoord, yCoord);
		context.lineTo(xCoord + size / noOfColumns, yCoord);
		context.stroke();
	}

	drawRightWall(xCoord, yCoord, size, noOfRows, noOfColumns) {
		context.beginPath();
		context.moveTo(xCoord + size / noOfColumns, yCoord);
		context.lineTo(xCoord + size / noOfColumns, yCoord + size / noOfRows);
		context.stroke();
	}

	drawBottomWall(xCoord, yCoord, size, noOfRows, noOfColumns) {
		context.beginPath();
		context.moveTo(xCoord, yCoord + size / noOfRows);
		context.lineTo(xCoord + size / noOfColumns, yCoord + size / noOfRows);
		context.stroke();
	}

	drawLeftWall(xCoord, yCoord, size, noOfRows, _noOfColumns) {
		context.beginPath();
		context.moveTo(xCoord, yCoord);
		context.lineTo(xCoord, yCoord + size / noOfRows);
		context.stroke();
	}

	show(size, noOfRows, noOfColumns) {
		let xCoord = (this.columnNumber * size) / noOfColumns;
		let yCoord = (this.rowNumber * size) / noOfRows;

		context.strokeStyle = "white";
		context.fillStyle = "black";
		context.lineWidth = 2;

		if (this.walls.topWall)
			this.drawTopWall(xCoord, yCoord, size, noOfRows, noOfColumns);
		if (this.walls.rightWall)
			this.drawRightWall(xCoord, yCoord, size, noOfRows, noOfColumns);
		if (this.walls.bottomWall)
			this.drawBottomWall(xCoord, yCoord, size, noOfRows, noOfColumns);
		if (this.walls.leftWall)
			this.drawLeftWall(xCoord, yCoord, size, noOfRows, noOfColumns);

		if (this.isVisited) {
			context.fillRect(
				xCoord + 1,
				yCoord + 1,
				size / noOfColumns - 2,
				size / noOfRows - 2
			);
		}
	}
}
