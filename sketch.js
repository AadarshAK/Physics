
const Engine = Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies

var engine,world;
var object1;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic:true
  }
  ground= Bodies.rectangle(200,300,400,10,options);
  
  var obj_option={
    restitution:2
  }

  object1 = Bodies.circle(200,200,40,obj_option);
  World.add(world,object1);
  
  World.add(world,ground);
  console.log(object1);
} 

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(object1.position.x,object1.position.y,40,40);
  drawSprites();
}