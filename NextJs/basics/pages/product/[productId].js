import { useRouter } from "next/router";

function ProductDetail() {
	const router = useRouter();
	const { productId } = router.query;

	return (
		<div>
			<h1>ProductDetail about {productId} </h1>
		</div>
	);
}

export default ProductDetail;
