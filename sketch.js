var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";
  movingRect.velocityX=-2;
fixedRect=createSprite(200,200,20,40);
fixedRect.shapeColor="green";
fixedRect.velocityX=2;


}

function draw() {
  background(255,255,255); 
 
  // movingRect.x=mouseX;
  //movingRect.y=mouseY;
 // if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
   // fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
 //   movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
  // fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
//movingRect.shapeColor="green";
//fixedRect.shapeColor="red";
  //}else{
    //movingRect.shapeColor="red";
//fixedRect.shapeColor="green";
  //}
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
movingRect.velocityX=(-1)*movingRect.velocityX;
fixedRect.velocityX=(-1)*fixedRect.velocityX;
  }



  drawSprites();
}