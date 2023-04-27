var path,boy;
var pathImg,boyImg1,boyImg2,boyImg3,boyImg4;

var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var obstacle1Img,obstacle2Img,obstacle3Img,obstacle4Img,obstacle5Img;

 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  pathImg = loadImage("Road (THIS ONE).png");
  boyImg1 = loadAnimation("Boy 1.png","Boy 2.png","Boy 3.png","Boy 4.png","Boy 5.png","Boy 6.png","Boy 7.png","Boy 8.png");


  obstacle1Img= loadImage("Rock 1.png");
  obstacle2Img= loadImage("Rock 2.png");
  obstacle3Img= loadImage("Rock 3.png");
  obstacle4Img= loadImage("Rock 4.png");
  obstacle5Img= loadImage("Rock 5.png");
  
  
  
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(900,300);
// Moving background
path=createSprite(0,150);
path.addImage(pathImg);
path .scale=2;

path.velocityX = -5;

//creating boy running
boy  = createSprite(70,150);
boy.addAnimation("boy",boyImg1);
boy.scale=0.7;
  
//set collider for mainCyclist

//mainCyclist.setCollission("rectangle",0,0,40,40);
boy.setCollider("rectangle",0,0,100,100);
//mainCyclist.setCollission("rectangle",0,0,40,40,50);
//mainCyclist.setCollider("rectangle",0,0,40,40,50);

  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
obstaclesGroup = new Group();
  
}

function draw() {
  background(pathImg);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);  
  

   edges= createEdgeSprites();
   boy.collide(edges);
  
  //code to reset the background
  
  
  if(path.x < 0 ){
    path.x = width/2;
  }
  
    //code to play cycle bell sound
    if(keyDown("space")&& boy.y >= 150) {
      boy.velocityY = -12;
    }
      boy.velocityY = boy.velocityY + 0.8;

  
  //creating continous opponent players
  
  if (World.frameCount % 150 == 0) {
    spawnObstacles();
  }
  
   if(obstaclesGroup.isTouching(boy)){
     gameState = END;
     path.destroy;
     boy.destroy;
     obstaclesGroup.destroyEach;
    }
     

    
}else if (gameState === END) {
    gameOver.visible = true;
  
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    path.velocityX = 0;
    boy.velocityY = 0;
    boy.velocityX = 0;
    
    // if(keyDown("UP_ARROW")) {
    //   reset;
    // }

    // if(key("UP_ARROW")) {
    //   reset();
    // }

    // if(keyDown()) {
    //   reset();
    // }

     if(keyDown("UP_ARROW")) {
       reset();
     }
}
}

function spawnObstacles(){
if(frameCount%30 === 0){
        obstacle1 =createSprite(1100,Math.round(random(50, 250)));
        
        obstacle1.velocityX = -(6 + 2*distance/150);
        var rand= Math.round(random(1,5));
        console.log(rand);
        switch(rand)
        {
          
          case 1:obstacle1.addImage(obstacle1Img);
                  break;
          case 2:obstacle1.addImage(obstacle2Img);
                  break;
          case 3:obstacle1.addImage(obstacle3Img);
                  break;
          case 4:obstacle1.addImage(obstacle4Img);
                  break;
          case 5:obstacle1.addImage(obstacle5Img);
                  break;
          default: break;
        }
        
        
        obstacle1.scale =0.6;
        obstacle1.setLifetime=170;
        obstaclesGroup.add(obstacle1);
      }
        
}

//function reset{
//  gameState = END;
//  gameOver.visible = false;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 0;
// }

//function reset{
//  gameState = PLAY;
//  gameOver.visible = true;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroy();
//  yellowCG.destroy();
//  redCG.destroy();
  
//  distance = 0;
// }

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  boy.destroy
  
obstaclesGroup.destroyEach();
  
  distance = 0;
 }

//function reset(){
//  gameState = END;
//  gameOver.visible = true;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 50;
// }


// End of game code;




