var ts = 200;
var soundA, soundB, soundC, soundD, soundE, soundF, soundG, soundH, soundI, soundJ, soundK, soundL, soundM, soundN,
soundO, soundP, soundQ, soundR, soundS, soundT, soundU, soundV, soundW, soundX, soundY, soundZ;

function preload(){
  soundA = loadSound('../letters/A.mp3');
  soundB = loadSound('../letters/BC.mp3');
  soundC = loadSound('../letters/C.mp3');
  soundD = loadSound('../letters/D.mp3');
  soundE = loadSound('../letters/E.mp3');
  soundF = loadSound('../letters/F.mp3');
  soundG = loadSound('../letters/G.mp3');
  soundH = loadSound('../letters/H.mp3');
  soundI = loadSound('../letters/I.mp3');
  soundJ = loadSound('../letters/J.mp3');
  soundK = loadSound('../letters/K.mp3');
  soundL = loadSound('../letters/L.mp3');
  soundM = loadSound('../letters/M.mp3');
  soundN = loadSound('../letters/N.mp3');
  soundO = loadSound('../letters/O.mp3');
  soundP = loadSound('../letters/P.mp3');
  soundQ = loadSound('../letters/Q.mp3');
  soundR = loadSound('../letters/R.mp3');
  soundS = loadSound('../letters/S.mp3');
  soundT = loadSound('../letters/T.mp3');
  soundU = loadSound('../letters/U.mp3');
  soundV = loadSound('../letters/V.mp3');
  soundW = loadSound('../letters/W.mp3');
  soundX = loadSound('../letters/X.mp3');
  soundY = loadSound('../letters/Y.mp3');
  soundZ = loadSound('../letters/Z.mp3');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255, 10);

}

function keyTyped(){
  if(key==='a'){
    stroke(255);
    soundA.play();
    textAlign(CENTER);
    textSize(ts);
    text('A', windowWidth/2, windowHeight/2);
  }
  if(key==='b'){
    soundB.play();
    textAlign(CENTER);
    textSize(ts);
    text('B', windowWidth/2, windowHeight/2);
  }
  if(key==='c'){
    soundC.play();
    textAlign(CENTER);
    textSize(ts);
    text('C', windowWidth/2, windowHeight/2);
  }
  if(key==='d'){
    soundD.play();
    textAlign(CENTER);
    textSize(ts);
    text('D', windowWidth/2, windowHeight/2);
  }
  if(key==='e'){
    soundE.play();
    textAlign(CENTER);
    textSize(ts);
    text('E', windowWidth/2, windowHeight/2);
  }
  if(key==='f'){
    soundF.play();
    textAlign(CENTER);
    textSize(ts);
    text('F', windowWidth/2, windowHeight/2);
  }
  if(key==='g'){
    soundG.play();
    textAlign(CENTER);
    textSize(ts);
    text('G', windowWidth/2, windowHeight/2);
  }
  if(key==='h'){
    soundH.play();
    textAlign(CENTER);
    textSize(ts);
    text('H', windowWidth/2, windowHeight/2);
  }
  if(key==='i'){
    soundI.play();
    textAlign(CENTER);
    textSize(ts);
    text('I', windowWidth/2, windowHeight/2);
  }
  if(key==='j'){
    soundJ.play();
    textAlign(CENTER);
    textSize(ts);
    text('J', windowWidth/2, windowHeight/2);
  }
  if(key==='k'){
    soundK.play();
    textAlign(CENTER);
    textSize(ts);
    text('K', windowWidth/2, windowHeight/2);
  }
  if(key==='l'){
    soundL.play();
    textAlign(CENTER);
    textSize(ts);
    text('L', windowWidth/2, windowHeight/2);
  }
  if(key==='m'){
    soundM.play();
    textAlign(CENTER);
    textSize(ts);
    text('M', windowWidth/2, windowHeight/2);
  }
  if(key==='n'){
    soundN.play();
    textAlign(CENTER);
    textSize(ts);
    text('N', windowWidth/2, windowHeight/2);
  }
  if(key==='o'){
    soundO.play();
    textAlign(CENTER);
    textSize(ts);
    text('O', windowWidth/2, windowHeight/2);
  }
  if(key==='p'){
    soundP.play();
    textAlign(CENTER);
    textSize(ts);
    text('P', windowWidth/2, windowHeight/2);
  }
  if(key==='q'){
    soundQ.play();
    textAlign(CENTER);
    textSize(ts);
    text('Q', windowWidth/2, windowHeight/2);
  }
  if(key==='r'){
    soundR.play();
    textAlign(CENTER);
    textSize(ts);
    text('R', windowWidth/2, windowHeight/2);
  }
  if(key==='s'){
    soundS.play();
    textAlign(CENTER);
    textSize(ts);
    text('S', windowWidth/2, windowHeight/2);
  }
  if(key==='t'){
    soundT.play();
    textAlign(CENTER);
    textSize(ts);
    text('T', windowWidth/2, windowHeight/2);
  }
  if(key==='u'){
    soundU.play();
    textAlign(CENTER);
    textSize(ts);
    text('U', windowWidth/2, windowHeight/2);
  }
  if(key==='v'){
    soundV.play();
    textAlign(CENTER);
    textSize(ts);
    text('V', windowWidth/2, windowHeight/2);
  }
  if(key==='w'){
    soundW.play();
    textAlign(CENTER);
    textSize(ts);
    text('W', windowWidth/2, windowHeight/2);
  }
  if(key==='x'){
    soundX.play();
    textAlign(CENTER);
    textSize(ts);
    text('X', windowWidth/2, windowHeight/2);
  }
  if(key==='y'){
    soundY.play();
    textAlign(CENTER);
    textSize(ts);
    text('Y', windowWidth/2, windowHeight/2);
  }
  if(key==='z'){
    soundZ.play();
    textAlign(CENTER);
    textSize(ts);
    text('Z', windowWidth/2, windowHeight/2);
  }
}
