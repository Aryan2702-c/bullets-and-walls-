var car, wall; 
var safeimg,lethalimg,averageimg,mainimg;
var speed, weight; 

function setup() {

  createCanvas(1400,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  
  bullet=createSprite(50, 200, 50,5);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="grey";

}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){


 
    bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (damage>10){
      wall.shapeColor="blue";
    }
      if (damage<10){
      wall.shapeColor="green";
    }

  }

  drawSprites();
}