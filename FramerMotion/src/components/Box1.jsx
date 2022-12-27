import { useState } from "react";
import { motion } from "framer-motion";

function Box1() {
	const [isAnimating, setIsAnimating] = useState(false);

	return (
		<div className="box-container">
			<h3>BOX 1</h3>
			<motion.div
				className="box"
				initial={{
					// initial properties we need to set before animation starts
					opacity: 0.25,
					backgroundColor: "violet",
				}}
				animate={{
					// final properties we want after the animation ends
					x: isAnimating ? 800 : 0,
					opacity: isAnimating ? 1 : 0.25,
					backgroundColor: isAnimating ? "sandybrown" : "violet",
					rotate: isAnimating ? 360 : 0,
				}}
				transition={{
					// Transition set what type of animation and how much is the duration
					// type="tween" // tween type is normal transition for animation
					// duration=2 	 // duration needs to be set for transition for tween type
					damping: 10, // slows down animation transition at the end
					type: "spring", // // for springy transition effect
					stiffness: 80, // stiffness is "duration" for spring type(instead of duration set the stiffness property)
				}}
				onClick={() => setIsAnimating(!isAnimating)}
			></motion.div>
		</div>
	);
}

export default Box1;
