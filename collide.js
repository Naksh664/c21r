function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge >= LwallLeftEdge){
  return true
  }
  return false 
}