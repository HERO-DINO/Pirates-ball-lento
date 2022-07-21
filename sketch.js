
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;

//crie uma matriz vazia

var balls = [];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);



  Engine.update(engine);
  ground.display();

 

  //crie um laço de repetição

  cannon.display();
  tower.display();

  for(var i =0; i<= balls.length; i++){
    ShowCannonBalls(balls[i]);
  }

  keyPressed();



}

//crie uma função de acionamento de tecla

//crie uma função para exibir a bala




function keyReleased() {
  if (keyCode === DOWN_ARROW) { 
    balls[balls.length - 1].shoot();
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);



  }
}

function ShowCannonBalls(ball,i){
  if(ball){
    ball.display()
    
  }
}


















