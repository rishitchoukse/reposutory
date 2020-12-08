var fr,mr

function setup() {
  createCanvas(800,400);
  fr = createSprite(200,200,50,50);
  fr.shapeColor="red"
  mr= createSprite(100,200,50,50)
  mr.shapeColor="red"
}

function draw() {
  background(255,255,255);  
if(fr.x-mr.x<fr.width/2+mr.width/2 && mr.x-fr.x<mr.width/2+fr.width/2&&fr.y-mr.y<fr.height+mr.height&& mr.y-fr.y){
  fr.shapeColor="blue"
  mr.shapeColor="blue"
}
else
{
  fr.shapeColor="red"
  mr.shapeColor="red"
}
  drawSprites();
}