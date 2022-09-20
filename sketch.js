const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var boss;
var ground;
var enemy1, enemy2, enemy3, enemy4;
var base1, base2, base3, base4;
var player

function preload()
{
  bgImg = loadImage('background_image.jpg');
}


function setup() 
{
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width, height, width, 1950);
  base1 = new Base(1400, 50, 300, 300);
  base2 = new Base(1400, 300, 300, 300);
  base3 = new Base(700, 300, 300, 300);
  base4 = new Base(400, 175, 300, 300);

  enemy1 = new Enemy(700, 200, 300, 300);
  enemy2 = new Enemy(1400, 200, 300, 300);
  enemy3 = new Enemy(400, 70, 300, 300);
  enemy4 = new Enemy(1400, 520, 300, 300);

  boss = new Boss(1400, 0, 200, 200);

  player = new Enemy(200, 500, 300, 300);

}


function draw() 
{
  background(51);
  image(bgImg, 0, 0, width, height);
  

  ground.show();
  base1.show();
  base2.show();
  base3.show();
  base4.show();

  enemy1.show();
  enemy2.show();
  enemy3.show();
  enemy4.show();

  boss.show();

  player.show();


  Engine.update(engine);
}

