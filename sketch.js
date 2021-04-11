var a , b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(500,200,50,50);
  a.shapeColor="red";
  b.shapeColor="red";
}

function draw() {
  background(0);
  b.x=mouseX;
  b.y=mouseY;
  console.log(b.x-a.x);
  console.log(b.width/2+a.width/2);
  if(b.x-a.x<=b.width/2+a.width/2&&a.x-b.x<=a.width/2+b.width/2)
  {
    a.shapeColor="green";
    b.shapeColor="green";
  }
  else
  {
    a.shapeColor="red";
    b.shapeColor="red";
  }
  drawSprites();
}