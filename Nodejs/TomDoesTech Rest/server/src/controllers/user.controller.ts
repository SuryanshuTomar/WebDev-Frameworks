import { Request, Response } from "express";
import logger from "../utils/logger";
import { InputType, createUser } from "../services/user.service";

export async function createUserHandler(
	req: Request<{}, {}, InputType>,
	res: Response
): Promise<void | Response<Error>> {
	try {
		const user = await createUser(req.body);
		res.status(200).json(user);
	} catch (error: any) {
		logger.error(error);

		// status code 409 means conflict.
		// In this case, it means that the email address that the user provided already exists in the database.
		return res.status(409).send(error.message);
	}
}

export async function getCurrentUser(req: Request, res: Response) {
	const { user } = res.locals;
	return user;
}
