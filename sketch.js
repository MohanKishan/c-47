// for food
var worm;
var biscute,cake,op,panipuri,vadapav,samosa
var foodGroup
var biscuteimg,cakeimg,opimg,panipuriimg,vadapavimg,samosaimg
function preload() {
  wormImg=loadImage("images/hi 2.0.png")
  biscuteimg=loadImage("images/biscute.png")
  cakeimg=loadImage("images/cake.png")
  opimg=loadImage("images/op.png")
  panipuriimg=loadImage("images/panipuri.png")
  vadapavimg=loadImage("images/vada pav.png")
  samosaimg=loadImage("images/samosa.png")
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  worm=createSprite(width/2,height/2)
  worm.addImage(wormImg)
  worm.debug=true
  worm.setCollider("rectangle",0,0,350,100)
 
foodGroup=new Group();
createFood();
} 

function draw() {
  //set background to white
  background("red");
  worm.x=mouseX;
  worm.y=mouseY;
  if(frameCount%50===0)
  createFood();
  
  touchFood();
  drawSprites();
 
}
function touchFood(){
  for (var i = 0; i < foodGroup.length; i++) {
    if(foodGroup.isTouching(worm)){
      console.log(foodGroup.get(i))
      foodGroup.get(i).destroy();
    }
  }
 
}

function touchingBorders(){
  edges=createEdgeSprites();
  if(worm.isTouching(edges)){

  }

}

function createFood(){
  biscute=createSprite(random(0,displayWidth),random(0,displayHeight))
  biscute.addImage(biscuteimg);
  biscute.scale=0.2
// biscute.lifetime=50;
//complete all these..k


cake=createSprite(random(0,displayWidth),random(0,displayHeight))
cake.addImage(cakeimg);
cake.scale=0.2

op=createSprite(random(0,displayWidth),random(0,displayHeight))
op.addImage(opimg);
op.scale=0.2

panipuri=createSprite(random(0,displayWidth),random(0,displayHeight))
panipuri.addImage(panipuriimg);
panipuri.scale=0.2

vadapav=createSprite(random(0,),random(0,displayHeight))
vadapav.addImage(vadapavimg);displayWidth
vadapav.scale=0.2

samosa=createSprite(random(0,displayWidth),random(0,displayHeight))
samosa.addImage(samosaimg);
samosa.scale=0.2

biscute.debug=true
cake.debug=true
op.debug=true
panipuri.debug=true
vadapav.debug=true
samosa.debug=true

biscute.setCollider("circle",0,0,100)
cake.setCollider("circle",0,0,100)
op.setCollider("circle",0,0,100)
panipuri.setCollider("circle",0,0,100)
vadapav.setCollider("circle",0,0,100)
samosa.setCollider("circle",0,0,100)

foodGroup.add(biscute)
  foodGroup.add(cake)
  foodGroup.add(op)
  foodGroup.add(panipuri)
  foodGroup.add(vadapav)
  foodGroup.add(samosa)

}


