/*
RULES

1. There has to be a tight row of strings.
2. From the top left corner and the right bottom corner I want rings in increasing size to appear.
3. When they reach the opposite side they start over but from a random amount lower/higher on the y-axis.
4. When they reach the top/bottom the reset to the opposite.
5. When they reach a certain size they reset to a set minimum size.
6. The color of both strings and rings are the same but randomly generated.
7. When the mouse is pressed all drawn circles disappear.

*/
var space = 100;
var h = 10;
var q = 1200;
var y = 0;
var p = 600;
var r = 0;
var index = 0;

function setup(){
  createCanvas(1200, 600);
}

function draw(){
  background(255,255,255,1);
  noFill();
  stroke(0,0,255);
  var y1 = 0;
  var y2 = height;
  var c = [color('#6495ed'), color('#00bfff'), color('#66cdaa'), color('#eedfcc'),color('#cdcdc1'),color('#e6e6fa'),color('#ffe4e1'), ,color('#2f4f4f'),color('#40e0d0'), color('#66cdaa'),color('#bdb76b'),color('#f0e68c'),color('#eedd82')];

for (var i = 0; i < width; i+=2) {
  stroke(c[index]);
  line(i, y1, i, y2);
}

  noFill()
  stroke(c[index]);
  ellipse(h, y, r, r);
  ellipse(q, p, r,r);

  if (random(1)<0.01){
    index = index +1;
  }
  if (index >= 7){
    index = 0;
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

function mousePressed(){
  clear();
}
