var r= 0;
var t= 0;
var p= 0;
//var o;

function setup() {
  createCanvas(458,344);
  img=loadImage("space.jpg");
  //o=loadImage("tesla.png")
  frameRate(60);
}
function draw() {
  image(img, 0,0,);
  //image(o,0,0);
  tint(255, 20);
r=r+2;
t=t-3;
/*
t=t+mouseX;
r=r+mouseY;
*/
push()
push()
noFill();
strokeWeight(1+(sin(frameCount/20)*2));
stroke(255);
translate(width/2, height/2);
rotate(radians(r));

push();
//first ring
push();

fill(255);
ellipse(0,0,5+(sin(frameCount/10)*25),5+(sin(frameCount/10)*25));

pop();
//second ring
ellipse(0,0,50,50);
//ellipse(0,-25,10,10);
push();
fill(255);
ellipse(25,0,5+(sin(frameCount/10)*10),5+(sin(frameCount/10)*10));
ellipse(-25,0,5+(sin(frameCount/10)*10),5+(sin(frameCount/10)*10));

pop();
rotate(radians(t));

//third ring
//if(frameCount>90&&frameCount<180){
ellipse(0,0,100,100);
push();
fill(255);
ellipse(50,0,5+(sin(frameCount/10)*10),5+(sin(frameCount/10)*10));
ellipse(0,-50,5+(sin(frameCount/10)*10),5+(sin(frameCount/10)*10));
ellipse(-50,0,5+(sin(frameCount/10)*10),5+(sin(frameCount/10)*10));
ellipse(0,50,5+(sin(frameCount/10)*10),5+(sin(frameCount/10)*10));
pop();
//}

//stars
ellipse(200, 0, 2, 2);
ellipse(0, 200, 2, 2);
ellipse(-200, 0, 2, 2);
ellipse(0, -200, 2, 2);
pop()
pop()
noStroke(0);

p=p+1;
rotate(radians(p));
ellipse(200,20,5,5);
ellipse(400,20,5,5);
pop()

}
