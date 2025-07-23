import {
	prop,
	getModelForClass,
	modelOptions,
	Severity,
	pre,
	DocumentType,
	index,
} from "@typegoose/typegoose";
import { v4 as nanoId } from "uuid";
import argon2 from "argon2";
import { logEvents } from "../utils/logger.utils";

@pre<User>("save", async function () {
	const user = this;
	if (user.isModified("password")) {
		const hash = await argon2.hash(user.password);
		user.password = hash;
	}
	return;
}) // pre save hook to hash user password if it has been modified.
@index({ email: 1 }) // it will create a new index for the user email
@modelOptions({
	schemaOptions: {
		timestamps: true,
	},
	options: {
		allowMixed: Severity.ALLOW, // This is allow our properties to be nullables.
	},
})
export class User {
	@prop({ required: true })
	firstName: string;

	@prop({ required: true })
	lastName: string;

	@prop({ lowercase: true, required: true, unique: true })
	email: string;

	@prop({ required: true })
	password: string;

	@prop({ required: true, default: () => nanoId() })
	verificationCode: string;

	@prop()
	passwordResetCode: string;

	@prop({ default: false })
	isVerified: boolean;

	// This is validate the entered password at the time of the login by the candidate..
	async validatePassword(this: DocumentType<User>, candidatePassword: string) {
		const user = this;
		try {
			return await argon2.verify(user.password, candidatePassword);
		} catch (error: any) {
			await logEvents("Could not validate Password", "errLog.log", "error");
			return false;
		}
	}
}

export const UserModel = getModelForClass(User);
