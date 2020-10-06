var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(700,200,60,height/2)

  car.shapeColor = "white";

  speed = random(55,99);
  weight = random(400,1500);

  car.velocityX = speed;

}

function draw() {
  background("black");  

  if(wall.position.x - car.position.x <(car.width + wall.width)/2){
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}