import { z } from "zod";

const emailSchema = z.string().email().min(1).max(255).toLowerCase();
const passwordSchema = z.string().min(6).max(255);
const confirmPasswordSchema = z.string().min(6).max(255);
const userAgentSchema = z.string().optional();

export const LoginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
	userAgent: userAgentSchema,
});

export const RegisterSchema = LoginSchema.extend({
	confirmPassword: confirmPasswordSchema,
}).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords do not match",
	path: ["password", "confirmPassword"],
});

export const VerificationCodeSchema = z.string().min(1).max(24);

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type VerificationCodeSchemaType = z.infer<typeof VerificationCodeSchema>;
