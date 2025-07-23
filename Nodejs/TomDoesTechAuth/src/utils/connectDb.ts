import mongoose from "mongoose";
import config from "config";
import logger, { logEvents } from "./logger.utils";

export async function connectToDb() {
	const dbURI = config.get<string>("database.uri");

	console.log(dbURI);

	try {
		await mongoose.connect(dbURI);
		logger.info("Connected to database! ");
	} catch (error: any) {
		await logEvents(error.message, "errLog.log", "error");
		process.exit(1);
	}
}
