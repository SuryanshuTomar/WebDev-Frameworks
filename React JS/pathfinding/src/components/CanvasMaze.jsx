import { useEffect, useState } from "react";
import { Maze } from "../classes/maze";

const CanvasMaze = () => {
	const minGridSize = 5;
	const maxGridSize = 25;
	const [maze, setMaze] = useState(new Maze(500, 10, 10));
	const [isMazeCompleted, setIsMazeCompleted] = useState(true);
	const [gridSize, setGridSize] = useState(minGridSize);

	useEffect(() => {
		maze.setup();
	}, [maze]);

	const handleResetGrid = () => {
		maze.resetGrid();
		setIsMazeCompleted(true);
	};

	const handleNewMaze = () => {
		setIsMazeCompleted(false);

		maze.reset = false;
		maze.draw();

		const timeOut = setInterval(() => {
			if (maze.isMazeCompleted) {
				setIsMazeCompleted(true);
				clearInterval(timeOut);
			}
		}, 500);
	};

	const handleGridSize = (event) => {
		const updatedValue = event.target.value;

		if (updatedValue >= minGridSize && updatedValue <= maxGridSize)
			setGridSize(event.target.value);
	};

	const handleNewGrid = () => {
		setMaze(new Maze(500, gridSize, gridSize));
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h2 style={{ textAlign: "center" }}>Canvas Maze Generation</h2>
			<br />
			<div>
				Grid Size :{" "}
				<input
					type="number"
					min={minGridSize}
					max={maxGridSize}
					value={gridSize}
					onChange={handleGridSize}
				/>
				<br />
				<br />
			</div>
			<button onClick={handleNewGrid}>Set Grid Size</button>
			<br />
			<div>
				<button onClick={handleResetGrid}>Reset Grid</button>{" "}
				<button
					onClick={handleNewMaze}
					disabled={!isMazeCompleted}
					style={{ marginBottom: 10 }}
				>
					Generate New Maze
				</button>
			</div>
		</div>
	);
};
export default CanvasMaze;
