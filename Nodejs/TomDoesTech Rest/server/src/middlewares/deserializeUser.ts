import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";
import config from "config";

export const deserializeUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// This get method from loadash will get the user access token of the user from the request object.
	const accessToken =
		get(req, "cookies.accessToken") ??
		get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

	if (!accessToken) return next();

	const refreshToken =
		get(req, "cookies.refreshToken") ??
		(get(req, "headers.x-refresh") as string);

	const { decoded, expired } = verifyJwt(accessToken);

	if (decoded) {
		res.locals.user = decoded; // This will attach the user to the response object.

		return next();
	}

	if (expired && refreshToken) {
		const newAccessToken = await reIssueAccessToken({ refreshToken });

		if (newAccessToken) {
			res.setHeader("x-access-token", newAccessToken);

			res.cookie("accessToken", newAccessToken, {
				maxAge: 900000, // 15mins
				httpOnly: true,
				domain: config.get<string>("cookie.domain"),
				path: "/",
				sameSite: "strict",
				secure: config.get<boolean>("cookie.secure"),
			});

			const { decoded: newAccessTokenDecoded } = verifyJwt(newAccessToken);

			res.locals.user = newAccessTokenDecoded;
		}
		return next();
	}

	return next();
};
