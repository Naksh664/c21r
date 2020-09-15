var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(20,8,50,50);
  bullet.weight = random(30,52);
  bullet.speed = random(223,321)
  wall =createSprite(1200, 200, thickness, height/2);
  wall.thickness = random(22,83)
  
}



function draw() {
  background(255,255,255);  
  if (hasColided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5*bullet.weight*bullet.speed*bullet.speed)/( wall.thickness* wall.thickness* wall.thickness);
  
    if(damage>10){
      wall.shapeColor = (255,0,0)
    }
  
    if(damage<10){
      wall.shapeColor = (0,255,0)
    }
  
  }
  drawSprites();
}
