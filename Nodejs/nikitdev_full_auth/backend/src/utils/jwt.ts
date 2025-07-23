import jwt from "jsonwebtoken";
import { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";
import type { SignOptions, VerifyOptions } from "jsonwebtoken";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";

export type RefreshTokenPayload = {
	sessionId: SessionDocument["_id"];
};

export type AccessTokenPayload = {
	sessionId: SessionDocument["_id"];
	userId: UserDocument["_id"];
};

export type SignOptionsAndSecret = SignOptions & { secret: string };

export type VerifyOptionsAndSecret = VerifyOptions & { secret: string };

const defaultSignOptions: SignOptions = {
	audience: ["user"],
};

export const accessTokenSignOptions: SignOptionsAndSecret = {
	expiresIn: "15m",
	secret: JWT_SECRET,
};

export const refreshTokenSignOptions: SignOptionsAndSecret = {
	expiresIn: "30d",
	secret: JWT_REFRESH_SECRET,
};

export const signToken = (
	payload: AccessTokenPayload | RefreshTokenPayload,
	options?: SignOptionsAndSecret
) => {
	const { secret, ...signOptions } = options || accessTokenSignOptions;
	return jwt.sign(payload, secret, { ...defaultSignOptions, ...signOptions });
};

export const verifyToken = <TPayload extends object = AccessTokenPayload>(
	token: string,
	options?: VerifyOptionsAndSecret
) => {
	const { secret = JWT_SECRET, ...verifyOptions } = options || {};

	try {
		const payload = jwt.verify(token, secret, {
			...defaultSignOptions,
			...verifyOptions,
		}) as TPayload;
		return { payload };
	} catch (error: any) {
		return {
			error: error.message,
		};
	}
};
