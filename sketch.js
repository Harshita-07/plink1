const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var division = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(486,800);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(width/2, height, 480, 20)

for(var k=0; k<=width; k=k+80){
  division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
}

}

function draw() {
  background('black'); 
  Engine.update(engine);

  ground.display();
  for(var k=0; k<=division.length; k++){
    division[k].display();
  }
  drawSprites();
}