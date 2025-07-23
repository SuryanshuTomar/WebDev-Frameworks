import { object, string, TypeOf } from "zod";

export const userBodySchema = object({
	firstName: string().trim().min(1, "'firstName' is required"),
	lastName: string().trim().min(1, "'lastName' is required"),
	email: string()
		.trim()
		.min(1, "'email' is required")
		.email("Not a valid email address!"),
	password: string().min(
		6,
		"'password' is too short - should be at least 6 characters"
	),
	passwordConfirmation: string().min(1, "'passwordConfirmation' is required"),
}).refine((data) => data.password === data.passwordConfirmation, {
	message: "Passwords do not match!",
	path: ["password", "passwordConfirmation"],
});

export const createUserSchema = object({
	body: userBodySchema,
});

export const verifyUserSchema = object({
	params: object({
		id: string(),
		verificationCode: string(),
	}),
});

export const forgotPasswordSchema = object({
	body: object({
		email: string({ required_error: "Email is required!" }).email(
			"Not a valid email address!"
		),
	}),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];

export type VerifyUserInput = TypeOf<typeof verifyUserSchema>["params"];

export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>["body"];
