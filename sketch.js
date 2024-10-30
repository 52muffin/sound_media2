let img;

function preload() {
  img = loadImage("jj.png");
}

function setup() {
  createCanvas(1280, 720);
  noStroke();
}

function draw() {
  image(img, 0, 0);
  if (mouseIsPressed == true) {
    console.log("mouseX: " + mouseX, "mouseY: " + mouseY);
  }
  fill(0, 150);
  //1
  beginShape();
  vertex(568, 315);
  vertex(571, 345);
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
  vertex(674, 310);
  vertex(609, 274);
  vertex(653, 229);
  endShape(CLOSE);
  //7
  beginShape();
  vertex(674, 310);
  vertex(609, 274);
  vertex(617, 335);
  endShape(CLOSE);
  //8
  beginShape();
  vertex(674, 310);
  vertex(708, 334);
  vertex(645, 360);
  endShape(CLOSE);
  //9
  beginShape();
  vertex(674, 310);
  vertex(708, 334);
  vertex(696, 271);
  vertex(653, 229);
  endShape(CLOSE);
  //10
  beginShape();
  vertex(755, 269);
  vertex(696, 271);
  vertex(653, 229);
  endShape(CLOSE);
  //11
  beginShape();
  vertex(755, 269);
  vertex(696, 271);
  vertex(785, 327);
  endShape(CLOSE);
  //12
  beginShape();
  vertex(708, 334);
  vertex(696, 271);
  vertex(785, 327);
  endShape(CLOSE);
  //13
  beginShape();
  vertex(708, 334);
  vertex(752, 377);
  vertex(785, 327);
  endShape(CLOSE);
  //14
  beginShape();
  vertex(846, 319);
  vertex(818, 265);
  vertex(785, 327);
  endShape(CLOSE);
  //15
  beginShape();
  vertex(755, 269);
  vertex(818, 265);
  vertex(785, 327);
  endShape(CLOSE);
  //16
  beginShape();
  vertex(755, 269);
  vertex(818, 265);
  vertex(757, 229);
  endShape(CLOSE);
  //17
  beginShape();
  vertex(755, 269);
  vertex(653, 229);
  vertex(757, 229);
  endShape(CLOSE);
  //18
  beginShape();
  vertex(676, 163);
  vertex(653, 229);
  vertex(757, 229);
  endShape(CLOSE);
  //19
  beginShape();
  vertex(676, 163);
  vertex(653, 229);
  vertex(592, 209);
  endShape(CLOSE);
  //20
  beginShape();
  vertex(676, 163);
  vertex(583, 149);
  vertex(592, 209);
  endShape(CLOSE);
  //21
  beginShape();
  vertex(676, 163);
  vertex(583, 149);
  vertex(671, 118);
  endShape(CLOSE);
  //22
  beginShape();
  vertex(676, 163);
  vertex(739, 126);
  vertex(671, 118);
  endShape(CLOSE);
  //23
  beginShape();
  vertex(676, 163);
  vertex(739, 126);
  vertex(757, 229);
  endShape(CLOSE);
  //24
  beginShape();
  vertex(825, 215);
  vertex(739, 126);
  vertex(757, 229);
  endShape(CLOSE);
  //25
  beginShape();
  vertex(825, 215);
  vertex(818, 265);
  vertex(757, 229);
  endShape(CLOSE);
}
