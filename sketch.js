
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,mango2,mango3,mango4,mango5,mango6;
var tree;
var

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}


