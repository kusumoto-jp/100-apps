var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);
  fill(127);
  stroke(0);

  var vol = mic.getLevel();
  var h = map(vol, 0, 1, 300, height);
  ellipse(width/2, height/2, h, h);
}