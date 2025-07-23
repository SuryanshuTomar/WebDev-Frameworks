import MealItem from "../MealItem";
import classes from "./index.module.css";

function MealsGrid(props) {
	const { meals } = props;
	return (
		<ul className={classes.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
}
export default MealsGrid;
