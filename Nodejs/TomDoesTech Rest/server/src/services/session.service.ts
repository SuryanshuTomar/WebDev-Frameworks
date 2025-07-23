import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { get } from "lodash";
import { findUser } from "./user.service";
import config from "config";

export async function createSession(userId: string, userAgent: string) {
	const session = await SessionModel.create({
		user: userId,
		userAgent,
	});

	return session.toJSON();
}

export async function getSessions(query: FilterQuery<SessionDocument>) {
	return SessionModel.find(query).lean(); // .lean() means will return the object without any methods on it.
}

export async function updateSession(
	query: FilterQuery<SessionDocument>,
	update: UpdateQuery<SessionDocument>
) {
	return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken({
	refreshToken,
}: {
	refreshToken: string;
}) {
	const { decoded } = verifyJwt(refreshToken);

	console.log("Decoded: ", decoded);

	if (!decoded || !get(decoded, "session")) return null;

	const session = await SessionModel.findById(get(decoded, "session"));

	if (!session || !session.valid) return null;

	const user = await findUser({ _id: session.user });

	if (!user) return null;

	// Reissue the new access token
	const accessTokenTtl = config.get<string>("accessTokenTtl");
	const reIssuedAccessToken = signJwt(
		{
			...user,
			session: session._id,
		},
		{
			expiresIn: accessTokenTtl,
		}
	);

	return reIssuedAccessToken;
}
