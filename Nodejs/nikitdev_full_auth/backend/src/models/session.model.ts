import type { Document, Types } from "mongoose";
import { model, Schema } from "mongoose";
import { thirtyDaysFromNow } from "../utils/date";

export interface SessionDocument extends Document {
	userId: Types.ObjectId;
	createdAt: Date;
	expiresAt: Date;
	userAgent?: string;
}

const SessionSchema = new Schema<SessionDocument>({
	userId: {
		ref: "User",
		type: Schema.Types.ObjectId,
		index: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
	expiresAt: {
		type: Date,
		default: thirtyDaysFromNow(),
	},
	userAgent: {
		type: String,
	},
});

export const SessionModel = model<SessionDocument>("Session", SessionSchema);
