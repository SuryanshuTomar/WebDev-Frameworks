import mongoose, { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";

type ProductInputType = Omit<
	ProductDocument,
	"createdAt" | "updatedAt" | "productId" | keyof mongoose.Document
>;

export async function createProduct(
	input: ProductInputType
): Promise<ProductDocument> {
	return ProductModel.create(input);
}

export async function findProduct(
	query: FilterQuery<ProductDocument>,
	options: QueryOptions = { lean: true }
) {
	return ProductModel.findOne(query, {}, options);
}

export async function findAndUpdateProduct(
	query: FilterQuery<ProductDocument>,
	update: UpdateQuery<ProductDocument>,
	options: QueryOptions
) {
	return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductDocument>) {
	return ProductModel.deleteOne(query);
}
