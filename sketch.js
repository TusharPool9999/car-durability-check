var wall, car;
var speed, weight;

function setup() {
  createCanvas(900,300);

  wall = createSprite(600 ,150 ,20 ,150 );
  wall.shapeColor="black";
  car = createSprite(10, 150, 50, 20);
  car.shapeColor="black";
  
  speed = random(60,80);
  weight = random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background("red"); 
  if (car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2){
     car.shapeColor="blue";
   }
   
     
  drawSprites();
}