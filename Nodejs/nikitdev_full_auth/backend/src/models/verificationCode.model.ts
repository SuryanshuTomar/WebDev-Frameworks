import { model, Schema, Types } from "mongoose";
import { VerificationCodeType } from "../constants/verificationCodeTypes";
import type { Document } from "mongoose";

export interface VerificationCodeDocument extends Document {
	userId: Types.ObjectId;
	type: VerificationCodeType;
	expiresAt: Date;
	createdAt: Date;
}

const verificationCodeSchema = new Schema<VerificationCodeDocument>({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
		index: true,
	},
	type: {
		type: String,
		required: true,
	},
	expiresAt: {
		type: Date,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

export const VerificationCodeModel = model<VerificationCodeDocument>(
	"VerficationCode",
	verificationCodeSchema,
	"verification_codes" // This is how it will be created in the mongodb database instead of "verificationcode" using the first parameter of this model method
);
