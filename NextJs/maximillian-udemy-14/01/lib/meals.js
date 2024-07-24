import sql from "better-sqlite3";
const db = sql("db/meals.db");

export const getMeals = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2500));
	return db.prepare("SELECT * FROM meals").all();
};
