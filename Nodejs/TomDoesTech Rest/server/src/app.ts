import express from "express";
import config from "config";
import connectDb from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import cors from "cors";
import { deserializeUser } from "./middlewares/deserializeUser";
import cookieParser from "cookie-parser";

const port = config.get<number>("port");

const app = express();

// Third-party middlewares
app.use(
	cors({
		origin: config.get<string>("origin"),
		credentials: true,
	})
);
app.use(cookieParser());
app.use(express.json());

// custom middlewares
app.use(deserializeUser);

// Start the server
app.listen(port, "localhost", async () => {
	logger.info(`App is running http://localhost:${port}`);

	// Connect with the database
	await connectDb();

	// Application routes
	routes(app);
});
