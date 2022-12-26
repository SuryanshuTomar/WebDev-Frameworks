import Link from "next/link";

function Homepage() {
	return (
		<div>
			<h1>Route Page: Homepage or main index page</h1>
			<Link href="/blog">Blog </Link> <br />
			<Link href="/product">Product </Link>
		</div>
	);
}

export default Homepage;
