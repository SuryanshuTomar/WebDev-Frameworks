import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

async function connectDb() {
	const dbUri = config.get<string>("dbUri");

	try {
		await mongoose.connect(dbUri);
		logger.info("Connected to database");
	} catch (err) {
		logger.error("Could not connect to database");
		process.exit(1);
	}
}

export default connectDb;
