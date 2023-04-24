import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={`${inter.className} p-2`}>{children}</body>
		</html>
	);
}
