import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import classes from "./header.module.css";
import HeaderBackground from "../HeaderBackground";
import NavLink from "../NavLink";

const MainHeader = () => {
	return (
		<>
			<HeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={Logo} alt="A plate with food on it." priority />
					NextLevel Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href={"/meals"}>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href={"/community"}>Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;
