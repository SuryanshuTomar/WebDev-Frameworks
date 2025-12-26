import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env.js";

export const connectToDb = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("Successfully connected to MongoDb!");
	} catch (error: any) {
		process.on("SIGINT", async () => {
			await mongoose.connection.close();
			process.exit(0);
		});
		throw {
			...error,
			message: "Connection Error: Unable to connect to MongoDB",
		};
	}
};
