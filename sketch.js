var gamestate=1;
var PLAY=1;
var END=0;
var score;
var bg, bgImg, player, shooterImg, shooter_shooting,zombie;
var zombie_Img,explosion_sound,zombieGroup;
function preload() {
    bgImg = loadImage("assets/bg.jpeg");
    shooterImg = loadImage("assets/shooter_2.png");
    shooter_shooting = loadImage("assets/shooter_3.png");
    zombie_Img=loadImage("assets/zombie.png");
   win_sound=loadSound("assets/win.mp3")
    explosion_sound=loadSound("assets/explosion.mp3")
    lose_sound=loadSound("assets/lose.mp3")
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
    bg.addImage(bgImg);
    bg.scale = 1.1
    player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
    player.addImage(shooterImg);
    player.scale = 0.13;
    player.debug = true;
    player.setCollider("rectangle", 0, 0, 300, 300);
    
   zombieGroup=createGroup()
  
   score=0;
}
function draw() {
    background(0);
    
       
 if(gamestate===PLAY){
    if (keyDown(UP_ARROW) || touches.length > 0) {
        player.y = player.y - 40;
        
    }
    if (keyDown(DOWN_ARROW) || touches.length > 0) {
        player.y = player.y + 40;
      
    }
       if (keyWentDown("space")) {
        player.addImage(shooter_shooting);
        explosion_sound.play();
      zombieGroup.destroyEach()
      score=score+1  
    
        
}  


Zombie();
 }
if (score===20){
    gamestate=END
}

if((zombieGroup).isTouching(player)){
    lose_sound.play();
   text("You died",displayWidth/2,displayHeight/2 )
}


 if(gamestate===END){
   zombieGroup.setLifetimeEach(-1);
   zombieGroup.setVelocityXEach(0);  
   textSize(100);
 text("YOU are safe for the NIGHT!!",displayWidth/2,displayHeight/2 );
  win_sound.play()
 }

drawSprites()
}

function Zombie(){
    
        if(frameCount% 100===0){      
        zombie= createSprite(displayWidth-200,displayHeight-500, 50, 50)
        zombie.y=Math.round(random(displayHeight-500,displayHeight-200))  
          zombie.addImage(zombie_Img);
          zombie.scale = 0.1;
          zombie.velocityX = -1;
          
          
          zombie.lifetime = 1000;
         
         zombieGroup.add(zombie)
        }
        
      
    }
   
   
   


 
