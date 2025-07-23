import express, { Request, Response } from "express";
import path from "path";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";

// Create an app router.
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "../..", "views", "index.html"));
}); // App Router

router.use("/api", userRouter); // User Router
router.use("/api", authRouter); // Auth Router

export default router;
