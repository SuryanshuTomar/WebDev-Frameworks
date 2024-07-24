import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
	req,
	res,
}: trpcExpress.CreateExpressContextOptions) => {
	// request
	const token = req.headers.authorization;

	// validate token here
	// then Get the user here

	const user = "webmatrix";

	if (user === undefined || user === null) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "You are unauthorized!",
		});
	}

	// attach the user in the context
	return { user };
};

type Context = inferAsyncReturnType<typeof createContext>;

export const trpc = initTRPC.context<Context>().create();
