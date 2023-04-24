import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "700"],
	style: ["italic", "normal"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Next Matrix",
	description: "Web Dev Tutorials",
	keywords:
		"Web development, web design, javascript, html, css, nextjs, next, js, react, reactjs",
};

export default function RootLayout({ children }) {
	console.log(children);
	return (
		<html lang="en">
			<body className={`${poppins.className} p-2`}>
				<main className="container">{children}</main>
			</body>
		</html>
	);
}
