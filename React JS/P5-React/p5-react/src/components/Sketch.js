import React, { useState, useEffect } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function Sketch() {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() => setRotation((rotation) => rotation + 100),
			100
		);
		console.log("Rendered");
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			{/* {console.log("Rendered")} */}
			<ReactP5Wrapper sketch={sketch} rotation={rotation} />
		</>
	);
}

export { Sketch };

function sketch(p5) {
	let rotation = 0;

	p5.setup = () => {
		console.log("Rerendered");
		p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
	};

	p5.updateWithProps = (props) => {
		if (props.rotation) {
			rotation = (props.rotation * Math.PI) / 180;
		}
	};

	p5.windowResized = () => {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
	};

	p5.draw = () => {
		console.log(rotation);
		p5.background(100);
		p5.normalMaterial();
		p5.noStroke();
		p5.push();
		// p5.rotateY(rotation);
		p5.rotateX(rotation);
		p5.box(100);
		p5.pop();
	};
}
