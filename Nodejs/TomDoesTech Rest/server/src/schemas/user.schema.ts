import { object, string, TypeOf } from "zod";

const userObjectSchema = object({
	name: string({ required_error: "Name is required" }),
	password: string({ required_error: "Password is required" }).min(
		6,
		"Password too short - should be at least 6 characters"
	),
	passwordConfirmation: string({
		required_error: "Password Confirmation is required",
	}),
	email: string({ required_error: "Email is required" }).email(
		"Not a valid email address"
	),
}).refine((data) => data.password === data.passwordConfirmation, {
	message: "Passwords do not match!",
	path: ["passwordConfirmation"],
});

export const createUserSchema = object({
	body: userObjectSchema,
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
