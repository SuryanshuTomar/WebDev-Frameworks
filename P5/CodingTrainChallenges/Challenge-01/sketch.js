let stars = new Array(800);

let sp;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < stars.length; i++) {
		stars[i] = new Star();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	sp = map(mouseX, 0, width, 5, 40);
	background(0);
	translate(width / 2, height / 2);
	for (let i = 0; i < stars.length; i++) {
		stars[i].update(sp);
		stars[i].show();
	}
}
