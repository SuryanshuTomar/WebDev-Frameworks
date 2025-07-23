import mongoose, { Schema, model } from "mongoose";
import { UserDocument } from "./user.model";

let uniqueId = "";
import("nanoid").then(async (module) => {
	const { customAlphabet } = module;
	const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
	uniqueId = await nanoid();
});

export interface ProductDocument extends mongoose.Document {
	user: UserDocument["_id"];
	productId: string;
	title: string;
	description: string;
	price: number;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

const ProductSchema = new Schema<ProductDocument>(
	{
		productId: {
			type: String,
			required: true,
			unique: true,
			default: () => `product_${uniqueId}`,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const ProductModel = model<ProductDocument>("Product", ProductSchema);
export default ProductModel;
