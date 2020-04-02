const GUI = new dat.GUI();

let ROTATE_CONTROL;

const MY_RECT = {
	width: 100,
	rotation: 0,
	rotationSpeed: 0,
	height: 150,
	brightness: 255,
	offsetX: 0,
	offsetY: 0,
	color: '#FF0000',
	resetRotation: () => {
		MY_RECT.rotation = 0;
  		ROTATE_CONTROL.updateDisplay();
	},
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	rectMode(CENTER);
	angleMode(DEGREES);
	noStroke();

	GUI.add(MY_RECT, 'width', MY_RECT.width).min(0);
	GUI.add(MY_RECT, 'height', MY_RECT.height).min(0);
	ROTATE_CONTROL = GUI.add(MY_RECT, 'rotationSpeed', MY_RECT.rotationSpeed).min(-5).max(5).step(1);
  	GUI.add(MY_RECT, 'offsetX', MY_RECT.offsetX).min(); //min value is undefined -> offsetX goes in negative
  	GUI.add(MY_RECT, 'offsetY', MY_RECT.offsetY).min();
  	GUI.add(MY_RECT, 'resetRotation');
  	GUI.addColor(MY_RECT, 'color');
  }

  function draw() {

  	background(0);

  	push();

  	translate(width/2, height/2);

  	drawMyRect();

  	pop();

  }

  function drawMyRect() {
  	push();

  	translate(MY_RECT.offsetX, MY_RECT.offsetY);
  	rotate(MY_RECT.rotation);

  	fill(MY_RECT.color);

  	rect(0, 0, MY_RECT.width, MY_RECT.height);

  	pop();

  	MY_RECT.rotation += MY_RECT.rotationSpeed;
  }

  function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
  }
