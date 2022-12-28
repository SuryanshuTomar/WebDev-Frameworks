import React from "react";
import { motion } from "framer-motion";

function Box4() {
	return (
		<div className="box-container">
			<h3>BOX 4</h3>
			<motion.div
				className="box"
				animate={{
					// keyframes for every property
					scale: [1, 1.4, 0.6, 1.2, 0.8, 1],
					rotate: [360, 0, 180, 0, 360],
					borderRadius: ["1%", "25%", "50%", "25%", "1%"],
				}}
				transition={{
					duration: 3,
					delay: 0.5,
				}}
			></motion.div>
		</div>
	);
}

export default Box4;
