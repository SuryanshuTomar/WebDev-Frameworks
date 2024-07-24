import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import type { Application, NextFunction, Request, Response } from "express";
import { appRouter } from "./router";
import { createContext } from "./lib/trpc";

const app: Application = express();

app.use(cors());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext: createContext
	})
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.json({ message: "Hello world!" });
});

const PORT: number = Number.parseInt(process.env.PORT || "3000", 10);
app.listen(PORT, () => {
	console.log(`🚀 Server running on Port: ${PORT}`);
});
