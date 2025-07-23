import type { CookieOptions, Response } from "express";
import { fifteenMinutesFromNow, thirtyDaysFromNow } from "./date";

type SetAuthCookiesParams = {
	res: Response;
	accessToken: string;
	refreshToken: string;
};

export const REFRESH_PATH = "/auth/refresh";

const secure = process.env.NODE_ENV !== "development";

const defaults: CookieOptions = {
	sameSite: "strict",
	httpOnly: true,
	secure,
};

export const getAccessTokenCookieOptions = (): CookieOptions => ({
	...defaults,
	expires: fifteenMinutesFromNow(),
});

export const getRefreshTokenCookieOptions = (): CookieOptions => ({
	...defaults,
	expires: thirtyDaysFromNow(),
	path: REFRESH_PATH, // only sent it if this path is hit otherwise not.
});

export const setAuthCookies = ({
	res,
	accessToken,
	refreshToken,
}: SetAuthCookiesParams) => {
	return res
		.cookie("accessToken", accessToken, getAccessTokenCookieOptions())
		.cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions());
};

export const clearAuthCookies = (res: Response) => {
	return res.clearCookie("accessToken").clearCookie("refreshToken", {
		path: REFRESH_PATH, // we need to mention this path as we are setting this cookie with path itself.
	});
};
