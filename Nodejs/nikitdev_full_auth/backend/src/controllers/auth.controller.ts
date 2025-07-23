import { CREATED, OK, UNAUTHORIZED } from "../constants/statusCodes";
import { SessionModel } from "../models/session.model";
import {
	LoginSchema,
	RegisterSchema,
	VerificationCodeSchema,
} from "../schemas/auth.schema";
import {
	createAccount,
	loginUser,
	refreshUserAccessToken,
	verifyEmail,
} from "../services/auth.service";
import { appAssert } from "../utils/appAsserts";
import { asyncHandler } from "../utils/asyncHandler";
import {
	clearAuthCookies,
	getAccessTokenCookieOptions,
	getRefreshTokenCookieOptions,
	setAuthCookies,
} from "../utils/cookies";
import { AccessTokenPayload, verifyToken } from "../utils/jwt";

export const registerHandler = asyncHandler(async (req, res) => {
	// validate the request
	const request = RegisterSchema.parse({
		...req.body,
		userAgent: req.headers["user-agent"],
	});

	// call the service
	const { user, accessToken, refreshToken } = await createAccount(request);

	// return response
	return setAuthCookies({ res, accessToken, refreshToken })
		.status(CREATED)
		.json(user);
});

export const loginHandler = asyncHandler(async (req, res) => {
	// validate the request
	const request = LoginSchema.parse({
		...req.body,
		userAgent: req.headers["user-agent"],
	});

	// call the service
	const { accessToken, refreshToken } = await loginUser(request);

	// return response
	return setAuthCookies({ res, accessToken, refreshToken }).status(OK).json({
		message: "Login successful!",
	});
});

export const refreshHandler = asyncHandler(async (req, res) => {
	// Check if the refresh token is present or not
	const refreshToken = req.cookies.refreshToken as string | undefined;
	appAssert(refreshToken, UNAUTHORIZED, "Missing refresh token!");

	// validate the refreshtoken and then create a new refreshToken
	const { accessToken, refreshToken: newRefreshToken } =
		await refreshUserAccessToken(refreshToken);

	// add refreshToken to the cookie only if it is renewed
	newRefreshToken &&
		res.cookie(
			"refreshToken",
			newRefreshToken,
			getRefreshTokenCookieOptions()
		);

	// return the newly created refresh token
	return res
		.status(OK)
		.cookie("accessToken", accessToken, getAccessTokenCookieOptions())
		.json({
			message: "Access token refreshed!",
		});
});

export const logoutHandler = asyncHandler(async (req, res) => {
	// validate the access token first
	const accessToken = req.cookies.accessToken as string | undefined;
	const { payload } = verifyToken<AccessTokenPayload>(accessToken ?? "");

	if (payload) await SessionModel.findByIdAndDelete(payload.sessionId);

	// clear the cookies and  return the response
	return clearAuthCookies(res).status(OK).json({
		message: "Logged out successfully!",
	});
});

export const verifyEmailHandler = asyncHandler(async (req, res) => {
	// validate the request
	const verificationCode = VerificationCodeSchema.parse(req.params.code);

	// call the service
	const { user } = await verifyEmail(verificationCode);

	// return response
	return res.status(OK).json({
		message: "Email was succesfully verified!",
	});
});
