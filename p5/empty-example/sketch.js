/*
RULES

1.
2.
3.
4.

*/

var space = 100;
var h = 10;
var q = 1200;
var y = 0;
var p = 600;
var r = 0;

function setup(){
  createCanvas(1200, 600);
}

function draw(){
  background(255,255,255,1);
  noFill();
  while(h>300){
  stroke(0,0,255);
}
  ellipse(h, y, r, r);
  stroke(255,0,0);
  ellipse(q, p, r,r);
  for(var x=0; x>=width; x=x+50){
    fill(0);
    ellipse(x, 300, 100,100);
  }
  if (random(1)<0.2){
    h -=10;
  } else {
    h +=10;
  }
  if (random(1)<0.2){
    q +=10;
  } else {
    q -=10;
  }
  r +=1;
  if (q<0){
    q = 1200;
    p -= space+random(-20, 20);
  }
  if (h>width){
    h = 0;
    y += space+random(-20, 20);
    r += random(10-20);
  }
  if (r>100){
    r = 0;
  }
  if (p <=0){
    p=600;
  }
  if (y >=600){
    y=0;
  }

}
