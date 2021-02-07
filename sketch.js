
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(695, 695, 1600, 20);

	hammer = new Hammer(20, 30);
	stone = new Stone(130, 30);
	ball = new Ball(230, 30);
	sand1 = new Sand(700, 10, 2);
	sand2 = new Sand(720, 10, 2);
	sand3 = new Sand(740, 10, 2);
	sand4 = new Sand(760, 10, 2);
	iron = new Iron(550, 20);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();

  hammer.display();
  stone.display();
  ball.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
 
 
 drawSprites();
 
}



