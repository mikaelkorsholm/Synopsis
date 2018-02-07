function setup() {
  createCanvas(500, 500, WEBGL);
}
 var a = 0.05;
 var b = 250
function draw() {
  if (keyIsPressed === true) {
    background(b-100,204,0);
  } else {
    background(b,204,0);
  }

  if (keyIsPressed === true) {
    rotateX(frameCount * mouseX);
    rotateY(frameCount * 0.00);
  } else {
    rotateX(frameCount * 0.00);
    rotateY(frameCount * 0.00);
  }
  box(200, 10, 50);


}

console.log("Hej")
