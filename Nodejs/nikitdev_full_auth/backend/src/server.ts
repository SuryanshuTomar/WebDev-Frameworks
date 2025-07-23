import "dotenv/config";
import express from "express";
import connectToDatabase from "./config/db";
import cors from "cors";
import cookieParser from "cookie-parser";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import { errorHandler } from "./middlewares/errorHandler";
import { OK } from "./constants/statusCodes";
import { authRoutes } from "./routes/auth.route";
import type { Request, Response } from "express";

const app = express();

// Predefined Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: APP_ORIGIN,
		credentials: true,
	})
);
app.use(cookieParser());

// Routes -
// @ts-ignore
app.get("/health", (_: Request, res: Response) => {
	return res.status(OK).json({
		status: "ok",
	});
});

// Auth Routes
app.use("/auth", authRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(Number(PORT), "localhost", async () => {
	console.log(`Server listening on ${PORT} in ${NODE_ENV} mode!!`);
	await connectToDatabase();
});
