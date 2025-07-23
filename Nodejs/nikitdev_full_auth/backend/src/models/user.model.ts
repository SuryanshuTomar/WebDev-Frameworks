import { model, Schema } from "mongoose";
import type { Document } from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

type UserDocumentWithoutPassword = Omit<UserDocument, "password">;

export interface UserDocument extends Document {
	email: string;
	password: string;
	verified: boolean;
	createdAt: Date;
	updatedAt: Date;
	comparePassword(value: string): Promise<boolean>;
	omitPassword(): UserDocumentWithoutPassword;
}

const UserSchema = new Schema<UserDocument>(
	{
		email: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		verified: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

// Encrypt the password before saving the user details to the database
UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await hashValue(this.password);
	next();
});

UserSchema.methods.comparePassword = async function (value: string) {
	return compareValue(value, this.password);
};

UserSchema.methods.omitPassword = function () {
	const obj = this.toObject(); // this is build in method in mongoose that will convert the mongoose object to the js object.
	delete obj.password;
	const passwordOmittedUser: UserDocumentWithoutPassword = obj;
	return passwordOmittedUser;
};

export const UserModel = model<UserDocument>("User", UserSchema);
