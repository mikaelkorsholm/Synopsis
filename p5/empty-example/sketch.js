let Bigmax;
var x = 0;
var y = 0;


function preload(){
Bigmax = loadModel('Bigmax_White_OBJ.obj');
}

function setup() {
  createCanvas(1280, 720, WEBGL);
  frameRate(100);
}

function draw() {
  background(255-frameCount, 255-frameCount,255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //box(100,10,10);
  model(Bigmax, 100,100);
  fill((frameCount % 10)*100, (frameCount % 10)*15, (frameCount%3)*2);

}
