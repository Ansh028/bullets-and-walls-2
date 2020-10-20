var bullet,speed,weight
var wall,thickness

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,30,10)
 
  wall=createSprite(400,200,thickness,height/2)
  thickness=random(22,83)
  
}

function draw() {
  bullet.velocityX=speed;
  background(255,255,255);  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }
  
  if(damage<10)
  {
  wall.shapeColor=color(0,255,0)
  }
}

  drawSprites();

  function hascollided(){
    bulletRightEdge=bullet.x+bullet.width
    wallLeftEdge=wall.x
    if(bulletRightEdge>=wallLeftEdge){
return true;
    }
    return false;
  }
}