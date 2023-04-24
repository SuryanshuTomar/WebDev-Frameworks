import Link from "next/link";

const HomePage = () => {
	return (
		<div>
			<h1>Welcome to Next Matrix</h1>
			<ul>
				<li className="mx-2">
					<Link href="/">Home</Link>
				</li>
				<li className="mx-2">
					<Link href="/about">About</Link>
				</li>
				<li className="mx-2">
					<Link href="/about/team">Team</Link>
				</li>
			</ul>
		</div>
	);
};
export default HomePage;
