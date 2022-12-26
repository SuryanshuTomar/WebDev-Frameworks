import Link from "next/link";
import { useRouter } from "next/router";

function Homepage() {
	const router = useRouter();

	const handleClick = () => {
		alert("Order Placed Succesfully !!");
		// push the path into the history before navigating.
		// router.push("/product");
		// replace the current path in the history before navigating
		router.replace("/product");
	};

	return (
		<div>
			<h1>Route Page: Homepage or main index page</h1>
			<Link href="/blog">Blog </Link> <br />
			<Link href="/product">Product </Link>
			<br />
			<button onClick={handleClick}>Place Order</button>
		</div>
	);
}

export default Homepage;
