
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle = [];
var pingo =[];
var divisions = [];

var ground , ground2 , ground3 , ground4;

var divisionHeight = 300;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for(var k=0;k<=width;k=k+80){
		divisions.push(new Diversions(k,700,10,divisionHeight));
	}
	for(var j = 40;j<=width;j=j+50){
		pingo.push(new Pingo(j,75));
	}
	for(var j = 15;j<=width;j=j+50){
		pingo.push(new Pingo(j,275))
	}

	ground  = new Ground(240,800,480,20);
	ground2 = new Ground(240,0,480,20);
	ground3 = new Ground(0,400,20,800);
	ground4 = new Ground(480,400,20,800);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for(var j =0;j<pingo.length;j++){
  pingo[j].display();
  }

  for(var k = 0; k<divisions.length;k++){

  divisions[k].display();
  }

  ground .display();
  ground2.display();
  ground3.display();
  ground4.display();

  if(frameCount%60===0){
	particle.push(new Particle(random(width/2*10,width/2+10),10));
	console.log(3);
}

  for(var j =0;j<particle.length;j++){
	particle[j].display();
	}

  drawSprites();
 
}



