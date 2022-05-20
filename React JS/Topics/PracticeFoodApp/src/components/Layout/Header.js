import React, { Fragment } from "react";

import Classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import CartHeaderButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<Fragment>
			<header className={Classes.header}>
				<h1>ReactMeals</h1>
				<CartHeaderButton onClick={props.onShowCart} />
			</header>
			<div className={Classes["main-image"]}>
				<img src={mealsImage} alt="Meals" />
			</div>
		</Fragment>
	);
};

export default Header;
