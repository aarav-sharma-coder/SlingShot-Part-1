const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rock;
var ground;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,375,1500,30);
  rock = new Rock(100,255,30);
  platform = new PlatForm(600,175,250,20);
  slingShot = new SlingShot(rock.body,{x:120,y:155});
  
  box1 = new Box(600,150,50,50);
  box2 = new Box(585,150,50,50);
  box3 = new Box(615,150,50,50);
  box4 = new Box(685,150,50,50);
  box5 = new Box(540,150,50,50);
  box6 = new Box(585,100,50,50);
  box7 = new Box(615,100,50,50);
  box8 = new Box(645,100,50,50);
  box9 = new Box(635,80,50,50);
  box10 = new Box(675,80,50,50);
  box11 = new Box(645,30,50,50);
  
  box12 = new Box(600,360,50,50);
  box13 = new Box(585,360,50,50);
  box14 = new Box(615,360,50,50);
  box15 = new Box(685,360,50,50);
  box16 = new Box(540,360,50,50);
  box17 = new Box(585,340,50,50);
  box18 = new Box(615,340,50,50);
  box19 = new Box(645,340,50,50);
  box20 = new Box(635,310,50,50);
  box21 = new Box(675,310,50,50);
  box22 = new Box(645,280,50,50);
  
}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  rock.display();
  slingShot.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  fill("BLACK");
  text("PRESS ENTER TO GET THE BALL",200,30);
}
function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY}); 
}
function mouseReleased()
{
  slingShot.fly();
}
function keyPressed(){
  if (keyCode === ENTER)
{
slingShot.attach(rock.body);
}
}