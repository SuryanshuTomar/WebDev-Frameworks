import type { ErrorRequestHandler } from "express";
import { HTTP } from "../constants/httpCodes.js";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
	console.log(`PATH: ${req.path}`, error);
	return res.status(HTTP.INTERNAL_SERVER_ERROR).send("Internal Server Error");
};
