import { useRouter } from "next/router";

function ItemDetails() {
	const router = useRouter();
	const { itemId } = router.query;

	return (
		<div>
			<h1>Dynamic Routes: Item Details - </h1>
			<br />
			<h3>Item Detail about "{itemId}"</h3>
		</div>
	);
}

export default ItemDetails;
