import express from "express";
import cors from "cors";
import { HTTP } from "./constants/httpCodes.js";
import { APP_ORIGIN } from "./constants/env.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import { asyncHandler } from "./utils/asyncHandler.js";

// App Setup
export const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: APP_ORIGIN,
		credentials: true,
	})
);

// heath check
app.get("/health", (_, res) => {
	return res.status(HTTP.OK).json({
		status: "healthy",
	});
});

// error handler
app.use(errorHandler);


