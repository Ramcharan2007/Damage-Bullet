var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1250,400);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(200,255,255);
  bullet.velocityX=speed;
  if(collided(bullet,wall))  
  {
      bullet.velocityX=0;
      var damage = 0.5 * speed * weight * speed/(thickness * thickness * thickness);
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }

      if(damage<=10)
      {
        wall.shapeColor=color(0,255,0);
      }

  }
  drawSprites();
}

function collided(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}