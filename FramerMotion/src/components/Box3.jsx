import React from "react";
import { motion } from "framer-motion";

function Box3() {
	const boxVariant = {
		initial: {
			x: "-100vw",
		},
		final: {
			x: 0,
			transition: {
				delay: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const boxListVariant = {
		initial: {
			x: "50px",
			opacity: 0,
		},
		final: {
			x: 0,
			opacity: 1,
		},
	};

	const boxDotVariant = {
		initial: {
			opacity: 0,
		},
		final: {
			opacity: 1,
			transition: {
				delay: 1,
			},
		},
	};
	return (
		<div className="box-container">
			<h3>BOX 3</h3>
			<motion.div
				className="box"
				variants={boxVariant}
				initial="initial"
				animate="final"
			>
				{[1, 2, 3].map((boxItem) => (
					<motion.li
						className="box-item"
						key={boxItem}
						variants={boxListVariant}
					>
						<motion.div
							className="box-dot"
							variants={boxDotVariant}
						></motion.div>
					</motion.li>
				))}
			</motion.div>
		</div>
	);
}

export default Box3;
