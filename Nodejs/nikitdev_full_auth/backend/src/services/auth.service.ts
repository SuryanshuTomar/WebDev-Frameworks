import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";
import {
	CONFLICT,
	INTERNAL_SERVER_ERROR,
	NOT_FOUND,
	UNAUTHORIZED,
} from "../constants/statusCodes";
import { VerificationCodeType } from "../constants/verificationCodeTypes";
import { SessionModel } from "../models/session.model";
import { UserModel } from "../models/user.model";
import { VerificationCodeModel } from "../models/verificationCode.model";
import { appAssert } from "../utils/appAsserts";
import { ONE_DAY_MS, oneYearFromNow, thirtyDaysFromNow } from "../utils/date";
import jwt from "jsonwebtoken";
import {
	RefreshTokenPayload,
	refreshTokenSignOptions,
	signToken,
	verifyToken,
} from "../utils/jwt";

export type CreateAccountParams = {
	email: string;
	password: string;
	userAgent?: string;
};

export type LoginUserParams = {
	email: string;
	password: string;
	userAgent?: string;
};

export const createAccount = async (data: CreateAccountParams) => {
	// verify existing user does not already exist
	const existingUser = await UserModel.exists({
		email: data.email,
	});
	// if (existingUser) throw new Error("User already exists!");
	appAssert(!existingUser, CONFLICT, "Email already in user");

	// create the new user account
	const user = await UserModel.create({
		email: data.email,
		password: data.password,
	});
	const userId = user._id;

	// create the verification token
	const verificationCode = await VerificationCodeModel.create({
		userId: user._id,
		type: VerificationCodeType.EmailVerification,
		expiresAt: oneYearFromNow(),
	});

	// send verification email to the user

	// create the session
	const session = await SessionModel.create({
		userId,
		userAgent: data.userAgent,
	});

	const sessionInfo = {
		sessionId: session._id,
	};

	// sign access token and the refresh token
	const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
	const accessToken = signToken({
		...sessionInfo,
		userId,
	});

	// return user and tokens
	return {
		user: user.omitPassword(),
		accessToken,
		refreshToken,
	};
};

export const loginUser = async (data: LoginUserParams) => {
	// get the user by email
	const user = await UserModel.findOne({ email: data.email });
	appAssert(user, UNAUTHORIZED, "Invalid email or password!");

	// valid the password from the request
	const isValidPassword = await user.comparePassword(data.password);
	appAssert(isValidPassword, UNAUTHORIZED, "Invalid email or password!");

	const userId = user._id;

	// create a session
	const session = await SessionModel.create({
		userId,
		userAgent: data.userAgent,
	});

	const sessionInfo = {
		sessionId: session._id,
	};

	// sign access token and the refresh token
	const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
	const accessToken = signToken({
		...sessionInfo,
		userId,
	});

	// return user and tokens
	return {
		user: user.omitPassword(),
		accessToken,
		refreshToken,
	};
};

export const refreshUserAccessToken = async (refreshToken: string) => {
	const { payload } = verifyToken<RefreshTokenPayload>(refreshToken, {
		secret: refreshTokenSignOptions.secret,
	});
	appAssert(payload, UNAUTHORIZED, "Invalid refresh token!");

	const session = await SessionModel.findById(payload.sessionId);

	const now = Date.now();
	const isValidSession = session && session.expiresAt.getTime() > now;
	// This case will happen when the session gets expired before the 30d expiration and is removed from our database date i.e. maybe the user is already logged out and trying to use the old refresh token.
	// Also, we want to check if the session is present then it should not be expired.
	appAssert(isValidSession, UNAUTHORIZED, "Session expired!");

	// refresh the token if its going to expire in the next 24 hours for better user experience
	const sessionNeedsRefresh = session.expiresAt.getTime() - now <= ONE_DAY_MS;
	if (sessionNeedsRefresh) {
		session.expiresAt = thirtyDaysFromNow();
		await session.save();
	}

	// sign the refresh token only if the refresh token needs to be renewed
	const newRefreshToken =
		sessionNeedsRefresh &&
		signToken(
			{
				sessionId: session._id,
			},
			refreshTokenSignOptions
		);

	// sign the access token
	const accessToken = signToken({
		userId: session.userId,
		sessionId: session._id,
	});

	return {
		accessToken,
		refreshToken: newRefreshToken,
	};
};

export const verifyEmail = async (code: string) => {
	// get the verification code from the DB
	const isValidCode = await VerificationCodeModel.findOne({
		_id: code,
		type: VerificationCodeType.EmailVerification,
		expiresAt: { $gt: new Date() },
	});
	appAssert(isValidCode, NOT_FOUND, "Invalid or expired verification code!");

	// get user by id and update the user to verified true
	const updatedUser = await UserModel.findByIdAndUpdate(
		isValidCode.userId,
		{
			verified: true,
		},
		{
			new: true,
		}
	);
	appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to verify email!");

	// delete verification code
	await isValidCode.deleteOne();

	// return the user
	return {
		user: updatedUser.omitPassword(),
	};
};
