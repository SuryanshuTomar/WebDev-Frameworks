import mongoose, { Schema, model } from "mongoose";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
	user: UserDocument["_id"];
	valid: boolean;
	userAgent: string;
	createdAt: Date;
	updatedAt: Date;
}

const SessionSchema = new Schema<SessionDocument>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		valid: {
			type: Boolean,
			required: true,
			default: true,
		},
		userAgent: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const SessionModel = model<SessionDocument>("Session", SessionSchema);
export default SessionModel;
