import { AppErrorCode } from "../../constants/errorCodes";
import { HttpStatusCode } from "../../constants/statusCodes";

export class AppError extends Error {
	constructor(
		public statusCode: HttpStatusCode,
		public message: string,
		public errorCode?: AppErrorCode
	) {
		super(message);
	}
}
