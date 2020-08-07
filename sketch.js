
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var stone,slingshot;
 var mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground =new Ground(600,height,1200,20);
    mango = new Tango(234,160,20,100);
	 mango1 = new Tango(256,160,20,100);
	  mango2 = new Tango(346,160,20,100);
	   mango3 = new Tango(234,231,20,100);
	    mango4= new Tango(234,120,20,100);
		 mango5 = new Tango(234,135,20,100);
		  mango6 = new Tango(234,180,20,100);
		   mango7 = new Tango(290,160,20,100);
     tree =new Tree (900,height,20,600);
	stone = new STONE(100,100);
  slingshot = new SlingShot(stone.body,{x:200,y:100});

	 	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 ground.display();

 tree.display();
 mango.display();
 mango.display();
 mango1.display();
 mango2.display();
 mango3.display();
mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 stone.display();
slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    slingshot.fly();
}

