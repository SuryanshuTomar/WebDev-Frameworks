import React from "react";
import { motion } from "framer-motion";

function Box2() {
	return (
		<div className="box-container">
			<h3>BOX 2</h3>
			<motion.div
				className="box"
				whileHover={{ scale: 1.1, boxShadow: "0 0 2px pink" }}
				whileTap={{ scale: 0.9 }}
				drag
				dragConstraints={{ top: 10, bottom: 10, left: 10, right: 10 }}
				// dragElastic={0.2}
				// dragMomentum={false}
				// dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
			></motion.div>
		</div>
	);
}

export default Box2;
