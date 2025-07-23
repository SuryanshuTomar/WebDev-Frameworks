import assert from "node:assert";
import { AppError } from "./classes/AppError";
import { HttpStatusCode } from "../constants/statusCodes";
import { AppErrorCode } from "../constants/errorCodes";

/**
 * Asserts a condition and throw an AppError if the condition is falsy.
 */

type AppAssert = (
	condition: any,
	httpStatusCode: HttpStatusCode,
	message: string,
	appErrorCode?: AppErrorCode
) => asserts condition;

export const appAssert: AppAssert = (
	condition,
	httpStatusCode,
	message,
	appErrorCode
) => assert(condition, new AppError(httpStatusCode, message, appErrorCode));
