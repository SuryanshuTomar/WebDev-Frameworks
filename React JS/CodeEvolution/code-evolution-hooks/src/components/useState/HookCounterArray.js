import React, { useState } from "react";

function HookCounterArray() {
	const [items, setItems] = useState([]);

	return (
		<div>
			<h1>HookCounterArray</h1>
			<button
				onClick={() =>
					setItems((prevState) => [
						...prevState,
						{
							id: items.length,
							value: Math.floor(Math.random() * 10) + 1,
						},
					])
				}
			>
				Add Item
			</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
}

export default HookCounterArray;
