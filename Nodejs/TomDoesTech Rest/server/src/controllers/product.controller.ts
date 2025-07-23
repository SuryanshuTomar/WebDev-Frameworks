import { Request, Response } from "express";
import {
	CreateProductInput,
	DeleteProductInput,
	GetProductInput,
	UpdateProductInput,
} from "../schemas/product.schema";
import {
	createProduct,
	deleteProduct,
	findAndUpdateProduct,
	findProduct,
} from "../services/product.service";

export async function createProductHandler(
	req: Request<{}, {}, CreateProductInput["body"]>,
	res: Response
) {
	const { body } = req;
	const { _id: userId } = res.locals.user;

	const product = await createProduct({ ...body, user: userId });
	return res.send(product);
}

export async function getProductHandler(
	req: Request<GetProductInput["params"]>,
	res: Response
) {
	const {
		params: { productId },
	} = req;

	const product = await findProduct({ productId });

	if (!product) return res.sendStatus(404);

	return res.send(product);
}

export async function updateProductHandler(
	req: Request<UpdateProductInput["params"]>,
	res: Response
) {
	const { _id: userId } = res.locals.user;
	const {
		body: update,
		params: { productId },
	} = req;

	const product = await findProduct({ productId });

	if (!product) return res.sendStatus(404);

	// if the current user is not the owner of the product.
	if (String(product.user) !== userId) return res.sendStatus(403);

	const updatedProduct = await findAndUpdateProduct(
		{
			productId,
		},
		update,
		{ new: true }
	);

	return res.send(updatedProduct);
}

export async function deleteProductHandler(
	req: Request<DeleteProductInput["params"]>,
	res: Response
) {
	const { _id: userId } = res.locals.user;
	const {
		params: { productId },
	} = req;

	const product = await findProduct({ productId });

	if (!product) return res.sendStatus(404);

	// if the current user is not the owner of the product.
	if (String(product.user) !== userId) return res.sendStatus(403);

	await deleteProduct({
		productId,
	});

	return res.sendStatus(200);
}
