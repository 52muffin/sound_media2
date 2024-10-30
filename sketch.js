let img;

function preload() {
  img = loadImage("jj.png");
}

function setup() {
  createCanvas(1280, 720);
  //noStroke();
}

function draw() {
  image(img, 0, 0);
  if (mouseIsPressed == true) {
    console.log("mouseX: " + mouseX, "mouseY: " + mouseY);
  }
  //1
  beginShape();
  vertex(568, 315);
  vertex(572, 344);
  vertex(617, 335);
  endShape(CLOSE);
  //2
  beginShape();
  vertex(568, 315);
  vertex(609, 274);
  vertex(617, 335);
  endShape(CLOSE);
  //3
  beginShape();
  vertex(568, 315);
  vertex(609, 274);
  vertex(547, 255);
  endShape(CLOSE);
  //4
  beginShape();
  vertex(592, 209);
  vertex(609, 274);
  vertex(547, 255);
  endShape(CLOSE);
  //5
  beginShape();
  vertex(592, 209);
  vertex(609, 274);
  vertex(653, 229);
  endShape(CLOSE);
  //6
  beginShape();
  vertex(673, 309);
  vertex(609, 274);
  vertex(653, 229);
  endShape(CLOSE);
  //7
  beginShape();
  vertex(673, 309);
  vertex(609, 274);
  vertex(617, 335);
  endShape(CLOSE);
}
