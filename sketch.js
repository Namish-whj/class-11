var ground
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,20,50)
  
  //create a trex sprite
 trex.addAnimation("trex_running",trex_running)
 trex.scale=0.5

 ground=createSprite(200,180,400,20)
}

function draw(){
  background("black")

  if(keyDown("space")){
    trex.velocityY=-10;
  
  }
 trex.velocityY=trex.velocityY+0.5
  
trex.collide(ground)
 drawSprites();
}
