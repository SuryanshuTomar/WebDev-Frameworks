import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={inter.className}>Hello Next 13</h1>
		</main>
	);
}
