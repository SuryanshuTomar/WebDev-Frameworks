import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const connectToDatabase = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("Connected to database!");
	} catch (error) {
		console.log("Couldn't connect to the database!", error);
		process.exit(1);
	}
};

export default connectToDatabase;
