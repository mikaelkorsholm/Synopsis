var x;
var img;
var sound;
var color;

function preload(){
sound = loadSound('Arcade.wav');
}

function setup() {
  createCanvas(1280,720);
img = loadImage("Hammer2.jpg");
color=50;
sound.loop();
}

function draw() {
  image(img, 0,0);


//F
noStroke();
fill(color);
rect(50+mouseX,228, 150, 40);
rect(100,250+mouseY, 100, 40);
rect(50+mouseX,228, 40, 300);
//U
rect(275+mouseX, 228, 40, 300);
rect(425, 178+mouseY, 40, 300);
rect(275+mouseX, 488, 140, 40);
//N
rect(550, 178+mouseY, 40, 300);
rect(650+mouseX, 228, 40, 300);

  beginShape();
vertex(500+mouseX, 228);
vertex(540+mouseX, 228);
vertex(690+mouseX, 485);
vertex(690+mouseX, 530);
vertex(650+mouseX, 530);
vertex(500+mouseX, 268);
endShape(CLOSE);

if(mouseX>40&&mouseX<60&&mouseY>40&&mouseY<60){
  color=255;

} else {

  color=100;
}
if(mouseX>1150&&mouseX<1280&&mouseY<700&&mouseY>580){
  color=0;
}

}

/*
  //F
  rect(100,228, 150, 40);
  rect(100,300, 100, 40);
  rect(100,228, 40, 300);
  // put drawing code here
//U
  rect(325, 228, 40, 300);
  rect(425, 228, 40, 300);
  rect(325, 488, 140, 40);

  //N
  rect(550, 228, 40, 300);
  rect(700, 228, 40, 300);

    beginShape();
vertex(550, 228);
vertex(590, 228);
vertex(740, 485);
vertex(740, 530);
vertex(700, 530);
vertex(550, 268);
endShape(CLOSE);
*/

function mousePressed() {
  console.log(mouseX, mouseY);
}
