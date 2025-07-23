import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";
import { FilterQuery } from "mongoose";

export type InputType = Omit<
	UserDocument,
	"createdAt" | "updatedAt" | "comparePasswords"
>;

export type UserDocumentWithoutPass = Omit<UserDocument, "password">;

export async function createUser(
	input: InputType
): Promise<UserDocumentWithoutPass | Error> {
	try {
		const user = await UserModel.create(input);
		const userWithoutPass = omit(user.toJSON(), "password");
		return userWithoutPass;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function validatePassword({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<UserDocumentWithoutPass | null> {
	const user = await UserModel.findOne({ email });

	if (!user) return null;

	const isValid = await user.comparePasswords(password);

	if (!isValid) return null;

	const userWithoutPass = omit(user.toJSON(), "password");
	return userWithoutPass;
}

export async function findUser(query: FilterQuery<UserDocument>) {
	return UserModel.findOne(query).lean();
}
