import type { Express, Request, Response } from "express";
import {
	createUserHandler,
	getCurrentUser,
} from "./controllers/user.controller";
import validateResource from "./middlewares/validateResource";
import { createUserSchema } from "./schemas/user.schema";
import {
	createUserSesssionHandler,
	deleteSessionsHandler,
	getUserSesssionHandler,
} from "./controllers/session.controller";
import { createSessionSchema } from "./schemas/session.schema";
import { requireUser } from "./middlewares/requireUser";
import {
	createProductSchema,
	deleteProductSchema,
	getProductSchema,
	updateProductSchema,
} from "./schemas/product.schema";
import {
	createProductHandler,
	deleteProductHandler,
	getProductHandler,
	updateProductHandler,
} from "./controllers/product.controller";

function routes(app: Express) {
	app.get("/healthcheck", (req: Request, res: Response) => {
		res.sendStatus(200);
	});

	app.post(
		"/api/users",
		validateResource(createUserSchema),
		createUserHandler
	);

	app.post(
		"/api/sessions",
		validateResource(createSessionSchema),
		createUserSesssionHandler
	);

	app.get("/api/sessions", requireUser, getUserSesssionHandler);

	app.delete("/api/sessions", requireUser, deleteSessionsHandler);

	app.post(
		"/api/products/:productId",
		[requireUser, validateResource(createProductSchema)],
		createProductHandler
	);

	app.put(
		"/api/products",
		[requireUser, validateResource(updateProductSchema)],
		updateProductHandler
	);

	app.get(
		"/api/products/:productId",
		validateResource(getProductSchema),
		getProductHandler
	);

	app.delete(
		"/api/products/:productId",
		[requireUser, validateResource(deleteProductSchema)],
		deleteProductHandler
	);

	app.get("/me", requireUser, getCurrentUser);
}

export default routes;
