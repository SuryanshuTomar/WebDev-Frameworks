import Link from "next/link";

const ProductsList = () => {
	return (
		<div>
			<h1>Route Page: ProductsList</h1>
			<br />
			<Link href="/product/1">Product 1</Link>
			<br />
			<Link href="/product/2">Product 2</Link>
			<br />
			<Link href="/product/3" replace>
				Product 3
			</Link>
			<br />
			<Link href="/">Home</Link>
		</div>
	);
};

export default ProductsList;
