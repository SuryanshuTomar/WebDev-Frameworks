import { ErrorRequestHandler } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/statusCodes";
import { z } from "zod";
import type { Response } from "express";
import { AppError } from "../utils/classes/AppError";
import { clearAuthCookies, REFRESH_PATH } from "../utils/cookies";

const handleZodError = (res: Response, error: z.ZodError) => {
	const errors = error.issues.map((err) => ({
		path: err.path.join(", "),
		message: err.message,
	}));

	return res.status(BAD_REQUEST).json({
		message: error.message,
		errors,
	});
};

const handleAppError = (res: Response, error: AppError) => {
	return res.status(error.statusCode).json({
		message: error.message,
		errorCode: error.errorCode,
	});
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
	console.log(`PATH: ${req.path}`, error);

	// Handle removal of cookies if the refresh token is not present
	if(req.path  === REFRESH_PATH){
		clearAuthCookies(res);
	}

	// Handle zod errors
	if (error instanceof z.ZodError) {
		handleZodError(res, error);
		return;
	}

	if (error instanceof AppError) {
		handleAppError(res, error);
		return;
	}

	// handle server errors
	res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error!");
	return;
};
