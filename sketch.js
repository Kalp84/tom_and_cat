var  backgroundImage
var cat,cat1,cat2, cat3,cat4
var mouse,mouse1, mouse2,mouse3

function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png");
    cat1=loadImage("images/tomOne.png")
    mouse1=loadImage("images/jerryOne.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(730,600,50,50);
    cat.addImage(cat1);
    cat.scale=0.12;

    mouse=createSprite(130,600,50,50);
    mouse.addImage(mouse1);
    mouse.scale=0.12;
}

function draw() {

    background( backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     cat.velocityX= -5;
 }

}
