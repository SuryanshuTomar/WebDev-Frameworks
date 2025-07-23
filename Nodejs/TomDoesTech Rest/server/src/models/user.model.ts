import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import type { CallbackWithoutResultAndOptionalError } from "mongoose";

export interface UserDocument extends mongoose.Document {
	email: string;
	name: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	comparePasswords(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<UserDocument>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Mongoose Pre Save Middleware Hook for checking if the password has been modified
UserSchema.pre(
	"save",
	async function (next: CallbackWithoutResultAndOptionalError): Promise<void> {
		let user = this as UserDocument;

		// If the password is not modified, then just simply return
		if (!user.isModified("password")) {
			return next();
		}

		// Otherwise, hash the password.
		const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor")); // This is the best password hashing package and algorithm.

		// Hash the password and save the new password.
		const hashedPassword = await bcrypt.hash(user.password, salt);
		user.password = hashedPassword;

		return next();
	}
);

// Creating a new Mongoose Method for comparing passwords
UserSchema.methods.comparePasswords = async function (
	candidatePasswords: string
): Promise<boolean> {
	const user = this as UserDocument;

	// this will return true if the user password matches with the candidate password. otherwise false.
	return bcrypt.compare(candidatePasswords, user.password).catch(() => false);
};

const UserModel = model<UserDocument>("User", UserSchema);
export default UserModel;
