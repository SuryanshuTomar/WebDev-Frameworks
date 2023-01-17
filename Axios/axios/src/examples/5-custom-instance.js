import { useEffect } from "react";
import axios from "axios";
import authFetch from "../axios/custom";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
	const fetchData = async () => {
		const storeResp = await authFetch("/react-store-products");
		const userResp = await axios.get(randomUserUrl);
		console.log(storeResp.data);
		console.log(userResp.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
