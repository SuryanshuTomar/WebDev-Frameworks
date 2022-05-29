import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
	const productsArray = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.food(1234, 2345, true),
	}));

	const [products, setProducts] = useState(productsArray);

	return (
		<>
			<h2>Products</h2>
			<div className="productsContainer">
				<SingleProduct products={products} />
			</div>
		</>
	);
};

export default Home;
