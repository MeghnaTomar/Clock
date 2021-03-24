var hr,mn,sc;

function setup() {
  createCanvas(1500,700);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background("black");  

  angleMode(DEGREES);
  hrAngle = map(hr,0,12,0,360);
  mnAngle = map(mn,0,12,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(scAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  drawSprites();
}

