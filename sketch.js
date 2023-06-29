var muertes=0
var fondoImage
var fondo
var personaje
var killer
var edge
var gamestate="PLAY"
function preload(){
  fondoImage=loadImage ("qYsdeB.png")
}

function setup(){
  createCanvas(400, 400);
  personaje=createSprite(120,120, 10, 10)
  personaje.shapeColor="white"
  killer=createSprite(275, 300, 10, 10)
  killer.shapeColor="red"
}

function draw() {
  edge= createEdgeSprites()
  personaje.collide(edge)
  killer.collide(edge)
   background(fondoImage);
  if (gamestate=="PLAY"){
    
  
  if (keyDown("RIGHT")){
    personaje.x+=4
  }
  if (keyDown("LEFT")){
    personaje.x-=4
  }
  if (keyDown("UP")){
    personaje.y-=4
  }
  if (keyDown("DOWN")){
    personaje.y+=4
  }
  if (keyDown("W")){
    killer.y-=4
  }
  if(keyDown("A")){
    killer.x-=4
  }
  if (keyDown("S")){
    killer.y+=4
  }
  if(keyDown("D")){
    killer.x+=4
  }
  if (killer.isTouching(personaje)){
    
    gamestate="GAMEOVER"
  }}
  if (gamestate=="GAMEOVER"){
    textSize (40)
    fill("red")
    text("PERDISTE ", 120,250)
  }
  if (keyDown("1") &&gamestate=="GAMEOVER"){
    gamestate="PLAY"
    personaje.x=120
    personaje.y=120
    killer.x=275
    killer.y=300
  }
  
 drawSprites();
}
