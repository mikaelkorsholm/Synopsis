var mic, recorder, soundFile, soundFile1;
//let bubble1, bubble2, bubble3;
var x, y, u, b, h;

var state = 0;

function setup() {
  createCanvas(1200,600);
  background('blue');
  textSize(30);
  fill(200);

  text('Enable mic and click the mouse to begin the fun', width/2-350, height/2);
  //bubble1 = new Bubble(100, 100, 100);
  x=width/2;
  y=height;
  u=height;

  mic = new p5.AudioIn();

  mic.start();

  recorder = new p5.SoundRecorder();

  recorder.setInput(mic);

  soundFile = new p5.SoundFile();
  soundFile1 = new p5.SoundFile();


}

/*
function draw(){
  bubble1.move();
  bubble1.show();
}
*/
/*
function draw(){

push();
clear();
  noStroke();
  fill(0,255,255);
  ellipse(x-320, y+100, b, h);
  ellipse(x-310, y+290, b+3, h+3);
  ellipse(x-390, y+450, b-3, h-3);
  ellipse(x-425, y+150, b+5, h+5);
  ellipse(x-360, y+30, b-8, h-8);
  ellipse(x-540, y+240, b-12, h-12);
  ellipse(x+270, y+300, b+5, h+5);
  ellipse(x+250, y+400, b-9, h-9);
  ellipse(x+340, y+60, b-11, h-11);
  ellipse(x+410, y+100, b+6, h+6);
  ellipse(x+500, y+40, b+1, h+1);
  x=x+random(-1, 1);
  y=y-1;
  u=u-1;
  b=24+random(-1,5);
  h=24+random(-1,5);
  if(y<-450){
    y=height;

  }
  if(u<300){
    u=height;
  }

pop();
}
*/
function mousePressed(){

  if (state === 0 && mic.enabled) {

     recorder.record(soundFile1);
      background('blue');
      text('Here goes the tongue twister - Practice it a bit and click when you are ready to record', width/2-550, height/2-50);
text('Peter Piper picked a peck of pickled peppers',220, height/2-10);
text('A peck of pickled peppers Peter Piper picked',200, height/2+20);
text('If Peter Piper picked a peck of pickled peppers',200, height/2+50);
text('Where’s the peck of pickled peppers Peter Piper picked?',200, height/2+80);
      state++;
    }
    else if (state === 1) {
      recorder.stop();
      recorder.record(soundFile);
      background('blue');
      text('Record your message.', width/2-350, height/2-50);
      text('Peter Piper picked a peck of pickled peppers',220, height/2-10);
      text('A peck of pickled peppers Peter Piper picked',200, height/2+20);
      text('If Peter Piper picked a peck of pickled peppers',200, height/2+50);
      text('Where’s the peck of pickled peppers Peter Piper picked?',200, height/2+80);
      state++;
    }
    else if (state === 2) {
      recorder.stop();

      background('blue');
      text('Your recording has been saved. Click to listen and download.', width/2-350, height/2);
      state++;
    }

    else if (state === 3) {
      soundFile.play();
      saveSound(soundFile1, 'mySound.wav');
      state++;
    }
  }
/*
  function mousePressed() {
  if ( sound.isPlaying() ) { // .isPlaying() returns a boolean
    sound.stop();
    background(255,0,0);
  } else {
    sound.play();
    background(0,255,0);
  }
}


class Bubble {
  constructor(tempX,tempY,tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  move(){
    this.x = this.x+random(-1,1);
    this.y = this.y+random(-1,1);
  }

  show(){
    noStroke();
    fill(0,255,255);
    ellipse(this.x, this.y, this.r);
  }
}
*/
