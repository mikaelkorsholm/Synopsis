var builder;
var blox;
var frame1, frame2, frame3, frame4;
var x;
var y;
var u=0;
var rec;
let bubble;


function setup(){
  createCanvas(1500,1500);
  builder = createSprite(width/2, height/2, 50,50);
  builder.shapeColor=color(244, 238, 66);
  frame1= createSprite(0,0,1,3000);
  frame1.shapeColor=color(255);
  frame2= createSprite(0,0,3000,1);
  frame2.shapeColor=color(0,0,255);
  frame3= createSprite(1500,0,1,3000);
  frame3.shapeColor=color(0,0,255);
  frame4= createSprite(0,1500,3000,1);
  frame4.shapeColor=color(0,255,0);
  blox = new Group;
  bubble = new Bubble;


    for (var i = 0; i < 8; i++) {
    var c = createSprite(
      random(width), random(height),
      random(50, 150), random(50, 500));
    c.shapeColor = color(random(5,200), random(5,200), random(5,200));
    blox.add(c);
  }
}

function draw(){
  background(50);
  drawSprites();


  builder.displace(blox);
  builder.collide(frame1);
  builder.collide(frame2);
  builder.collide(frame3);
  builder.collide(frame4);
  blox.collide(blox);

  if(keyDown(LEFT_ARROW))
    builder.rotation -= 4;
  if(keyDown(RIGHT_ARROW))
    builder.rotation += 4;
  if(keyDown(UP_ARROW))
    {
    builder.addSpeed(u+.02, builder.rotation);
    }
  if(keyDown(DOWN_ARROW))
    {
    builder.addSpeed(u+-.02, builder.rotation);
    }
}

class Bubble {
  constructor(){
    this.x=width/2;
    this.y=height/2;
  }
  show(){
    stroke(10);
    stokeWeight(4);
    fill(255);
    ellipse(this.x, this.y, 100,100);
  }
}
