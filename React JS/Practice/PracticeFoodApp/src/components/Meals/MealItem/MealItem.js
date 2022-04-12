import React from "react";

import Classes from "./MealItem.module.css";

const MealItem = (props) => {
	const price = `$ ${props.price.toFixed(2)}`;
	return (
		<li className={Classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={Classes.description}>{props.description}</div>
				<div className={Classes.price}>{price}</div>
			</div>
			<div></div>
		</li>
	);
};

export default MealItem;
