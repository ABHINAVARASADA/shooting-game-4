var gamestate=0;
var aship,bg1,fight;
var fighter1;

function preload(){
 aship=loadImage("images/AS.png");
 fight=loadImage("images/fighter.png");
 
     bg1=loadImage("images/start.png");
bg2=loadImage("images/BG1.png");
 
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    fighter1 = createSprite(50,displayHeight/2,100,100);
   fighter1.addImage(fight);
   fighter1.scale=0.3;
   fighter1.visible=false;
   

}

function draw(){
    if(gamestate===0){
        background(bg1)
        textSize(35);
        fill("red");
        text("HURRY UP! THE ALIENS ARE COMING",displayWidth/4,displayHeight/4);
        text("PRESS SPACE TO START THE GAME",displayWidth/4+20,displayHeight/4+70);
        if(keyDown("space")){
            gamestate=1;
        }
        
    }
    else if(gamestate===1){
        background(bg2);
        fighter1.visible=true;
        if(keyDown(LEFT_ARROW)){
            fighter1.x=fighter1.x-2;
        }
     spawnASship()
        drawSprites()
    }
}
 function spawnASship(){
     if(frameCount%200===0){
      var y=Math.round(random(20,displayHeight-10))
        var Aship=createSprite(displayWidth,y,50,50);
        Aship.addImage(aship);
        Aship.scale=0.5;
        Aship.velocityX=-3;
     }
 }

