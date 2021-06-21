const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, left, right;

function preload(){
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Wall(500, 490, 1000, 20);
	left = new Wall(850, 425, 10, 110);
	right = new Wall(950, 405, 10, 150);

	//Create the Bodies Here.
	const ball_options = {
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(50, 100, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);  
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y, ball.radius);
  
  left.display();
  right.display();
  ground.display();
  drawSprites();
}

function hyForce() {
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball, {x: 0, y: 0}, {x: 65, y: 71})
	}
}
