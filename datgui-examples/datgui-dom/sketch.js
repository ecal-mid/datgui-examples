window.addEventListener('load', setup);

const GUI = new dat.GUI();

let ROTATE_CONTROL;
let RECT;

const MY_RECT = {
	width: 100,
	rotation: 0,
	rotationSpeed: 0,
	height: 150,
	brightness: 255,
	x: 50,
	y: 50,
	color: '#FF00FF',
	resetRotation: () => {
		MY_RECT.rotation = 0;
		ROTATE_CONTROL.updateDisplay();
	},
}

function setup() {

	RECT = document.querySelector('.my-rect');

	GUI.add(MY_RECT, 'width', MY_RECT.width).min(0);
	GUI.add(MY_RECT, 'height', MY_RECT.height).min(0);
	ROTATE_CONTROL = GUI.add(MY_RECT, 'rotationSpeed', MY_RECT.rotationSpeed).min(-5).max(5).step(1);
  GUI.add(MY_RECT, 'x', MY_RECT.x).min();//min value is undefined -> x goes in negative
  GUI.add(MY_RECT, 'y', MY_RECT.y).min();
  GUI.add(MY_RECT, 'resetRotation');
  GUI.addColor(MY_RECT, 'color');

  draw();
}

function draw() {

  	transformMyRect();

    requestAnimationFrame(draw);

}

function transformMyRect() {

    MY_RECT.rotation += MY_RECT.rotationSpeed;
  	
  	RECT.style.width = MY_RECT.width +'px';
  	RECT.style.height = MY_RECT.height + 'px';
  	RECT.style.backgroundColor = MY_RECT.color;
    RECT.style.left = MY_RECT.x +'%';
    RECT.style.top = MY_RECT.y +'%';
  	RECT.style.transform = `translate(-50%,-50%) rotate(${MY_RECT.rotation}deg)`;
}