import { Request, Response } from "express";
import { validatePassword } from "../services/user.service";
import {
	createSession,
	getSessions,
	updateSession,
} from "../services/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export async function createUserSesssionHandler(req: Request, res: Response) {
	const accessTokenTtl = config.get<string>("accessTokenTtl");
	const refreshTokenTtl = config.get<string>("refreshTokenTtl");

	// Validate the user's password
	const user = await validatePassword(req.body);

	if (!user) {
		return res.status(401).send("Invalid email or password!");
	}

	// Create a session
	const session = await createSession(user._id, req.get("user-agent") ?? "");

	// Create an access Token
	const accessToken = signJwt(
		{
			...user,
			session: session._id,
		},
		{
			expiresIn: accessTokenTtl,
		}
	);

	// Create a Refresh Token
	const refreshToken = signJwt(
		{
			...user,
			session: session._id,
		},
		{
			expiresIn: refreshTokenTtl,
		}
	);

	// set the access token and refresh token cookies
	res.cookie("accessToken", accessToken, {
		maxAge: 900000, // 15mins
		httpOnly: true,
		domain: config.get<string>("cookie.domain"),
		path: "/",
		sameSite: "strict",
		secure: config.get<boolean>("cookie.secure"),
	});

	res.cookie("refreshToken", refreshToken, {
		maxAge: 3.15e10, // 1yr
		httpOnly: true,
		domain: config.get<string>("cookie.domain"),
		path: "/",
		sameSite: "strict",
		secure: config.get<boolean>("cookie.secure"),
	});

	// Return the access and refresh tokens
	return res.send({ accessToken, refreshToken });
}

export async function getUserSesssionHandler(req: Request, res: Response) {
	const userId = res.locals.user._id;

	const sessions = await getSessions({
		user: userId,
		valid: true,
	});

	return res.send(sessions);
}

export async function deleteSessionsHandler(req: Request, res: Response) {
	const sessionId = res.locals.user.session;

	await updateSession({ _id: sessionId }, { valid: false });

	return res.send({
		accessToken: null,
		refreshToken: null,
	});
}
