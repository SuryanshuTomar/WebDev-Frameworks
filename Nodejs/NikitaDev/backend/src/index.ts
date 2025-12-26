import "dotenv/config";
import { connectToDb } from "./config/db.js";
import { HOST, PORT } from "./constants/env.js";
import { app } from "./app.js";

const startServer = async () => {
	try {
		await connectToDb();
		app.listen(PORT, HOST, () => {
			console.log(`Server is running on port:${PORT} at host:${HOST}`);
		});
	} catch (error: any) {
		console.error(error.message);
	}
};

// Start server
startServer();
