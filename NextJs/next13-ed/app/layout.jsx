import "./globals.css";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
	weight: ["400", "700"],
	style: "italic",
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata = {
	title: "Movie App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<nav>
					<br />
					<h1
						style={{
							backgroundColor: "white",
							textAlign: "center",
							color: "black",
						}}
						className={inter.className}
					>
						MOVIE APP
					</h1>
					<br />
				</nav>
				{children}
			</body>
		</html>
	);
}
