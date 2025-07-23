import { Request, Response } from "express";
import { CreateUserInput, VerifyUserInput } from "../schemas/user.schema";
import {
	createUser,
	findUserByEmail,
	findUserById,
} from "../services/user.services";
import { sendEmail } from "../utils/mailer.utils";
import logger from "../utils/logger.utils";

// Create a New User
export async function createUserHandler(
	req: Request<{}, {}, CreateUserInput>,
	res: Response
) {
	const { body } = req;

	try {
		const user = await createUser(body);
		await sendEmail({
			from: "test@example.com",
			to: user.email,
			subject: "Please verify your account",
			text: `Verfication Code ${user.verificationCode}. \n
			${user._id}`,
		});

		return res.status(201).json({
			status: "success",
			message: "User created successfully!",
		});
	} catch (error: any) {
		// If the user is not unique(Or it does already exist)
		if (error.code === 11000) {
			return res.status(409).json({
				status: "failed",
				message: "User creation failed!",
			}); // Conflict status code
		}

		// otherwise throw internal server error.
		return res.status(500).json({
			status: "failed",
			message: "User creation failed!",
			error,
		});
	}
}

// Verify the User
export async function verifyUserHandler(
	req: Request<VerifyUserInput>,
	res: Response
) {
	const { id, verificationCode } = req.params;

	// find the user by id
	const user = await findUserById(id);

	if (!user) {
		return res.status(404).json({
			status: "failed",
			message: "User does not exist!",
		});
	}

	// check to see if they are already verified
	if (user.isVerified) {
		return res.json({
			status: "success",
			message: "User is already verified!",
		});
	}

	// check to see if the verification code matches
	if (user.verificationCode === verificationCode) {
		// update the isVerified property in the database for the user.
		user.isVerified = true;
		await user.save();

		return res.status(200).json({
			status: "success",
			message: "User verified!",
		});
	}

	return res.status(500).json({
		status: "failed",
		message: "Could not verify user!",
	});
}

// Forgot Password
export async function forgotPasswordHandler(req: Request, res: Response) {
	const { email } = req.body;
	const message =
		"If the user with that email exists, then you will recieve a password reset email.";

	// find the user using the email address
	const user = await findUserByEmail(email);

	if (!user) {
		logger.debug(`User with email '${email}' does not exist`);
		return res.status(404).json({
			status: "failed",
			message: "User does not exist!",
		});
	}

	// If user is not verified
	if (!user.isVerified) {
		return res.json({
			status: "failed",
			message: "User is not verified!",
		});
	}

	//
}
