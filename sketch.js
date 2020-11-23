var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(100,300,40,40);
  wall = createSprite(700,300,10,100);
  car.velocityX = 4;
}

function draw() {
  background("pink");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){

   car.shapeColor= "purple";
   wall.shapeColor= "yellow";
  
  }

  if(isTouching(movingRect,fixedRect)){
    text("hello malson",100,100);
  }
bounceOff(car,wall);

  drawSprites();
}



