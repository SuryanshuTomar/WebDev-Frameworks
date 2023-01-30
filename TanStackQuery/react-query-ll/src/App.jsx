import React from "react";
import Basics from "./components/Basics/Basics";
import MainQuery from "./components/UseQuery/MainQuery";
import MainMutation from "./components/UseMutation/MainMutation";

const App = () => {
	return (
		<div>
			<h1>Tanstack React Query</h1>

			{/* Basics on useQueryClient, useQuery and useMutation */}
			{/* <Basics /> */}

			{/* All about useQuery */}
			<MainQuery />

			{/* All about useQuery */}
			{/* <MainMutation /> */}


		</div>
	);
};

export default App;
