import mongoose from "mongoose";

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT?: number;
			HOST?: string;
      MONGO_URI?: string;
		}
	}

	namespace Express {
		interface Request {
			userId: mongoose.Types.ObjectId;
			sessionId: mongoose.Types.ObjectId;
		}
	}
}
export {};
