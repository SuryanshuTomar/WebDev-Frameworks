import express from "express";
import { validateResource } from "../middlewares/validateResource.middleware";
import { createUserSchema, verifyUserSchema } from "../schemas/user.schema";
import {
	createUserHandler,
	verifyUserHandler,
} from "../controllers/user.controllers";

const router = express.Router();

// get all users
router.get("/users", (req, res) => {
	res.sendStatus(200);
});

// create a new user
router.post("/users", validateResource(createUserSchema), createUserHandler);

// verify the the new user
router.post(
	"/users/verify/:id/:verificationCode",
	validateResource(verifyUserSchema),
	verifyUserHandler
);

export default router;
