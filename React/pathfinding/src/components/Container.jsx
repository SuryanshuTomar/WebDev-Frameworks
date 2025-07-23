import { useState } from "react";
import "./styles.css"; // Import CSS file for styling

function Grid({ rows, columns }) {
	const [gridItems, setGridItems] = useState(generateGridItems());

	// Function to generate grid items based on rows and columns
	function generateGridItems() {
		const items = [];
		const startRow = Math.floor(Math.random() * rows);
		const startColumn = Math.floor(Math.random() * columns);
		const endRow = Math.floor(Math.random() * rows);
		const endColumn = Math.floor(Math.random() * columns);

		for (let i = 0; i < rows; i++) {
			const row = [];
			for (let j = 0; j < columns; j++) {
				// Check if current position is the start or end position
				if (
					(i === startRow && j === startColumn) ||
					(i === endRow && j === endColumn)
				) {
					row.push("Start/End");
				} else {
					row.push(0);
				}
			}
			items.push(row);
		}

		// Generate a random path
		let currentRow = startRow;
		let currentColumn = startColumn;
		while (currentRow !== endRow || currentColumn !== endColumn) {
			items[currentRow][currentColumn] = 1;
			const directions = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
			]; // Up, Down, Left, Right
			const randomDirection =
				directions[Math.floor(Math.random() * directions.length)];
			const nextRow = currentRow + randomDirection[0];
			const nextColumn = currentColumn + randomDirection[1];
			if (
				nextRow >= 0 &&
				nextRow < rows &&
				nextColumn >= 0 &&
				nextColumn < columns
			) {
				currentRow = nextRow;
				currentColumn = nextColumn;
			}
		}
		items[currentRow][currentColumn] = "End";
		// console.log("items", items);

		return items;
	}

	// Function to regenerate grid items
	const regenerateGridItems = () => {
		setGridItems(generateGridItems());
	};

	return (
		<>
			<div className="grid-container">
				{gridItems.map((row, rowIndex) => (
					<div className="grid-row" key={rowIndex}>
						{row.map((item, columnIndex) => (
							<div
								className={`grid-item ${item === 1 ? "obstacle" : ""}`}
								key={columnIndex}
							>
								{item}
							</div>
						))}
					</div>
				))}
			</div>
			<button onClick={regenerateGridItems}>Regenerate Grid</button>
		</>
	);
}

export default Grid;
