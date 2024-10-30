let img;
let img2;

function preload() {
  img = loadImage("jj.png");
  img2 = loadImage("picture.jpg");
}

function setup() {
  createCanvas(1280, 720);
  noStroke();
}

function draw() {
  image(img, 0, 0);
  //image(img2, 120, 50, width / 4, height / 2);
  if (mouseIsPressed == true) {
    //console.log("mouseX: " + mouseX, "mouseY: " + mouseY);
    let c = get(mouseX, mouseY);
    console.log('RGB: ' + red(c) + ', ' + green(c) + ', ' + blue(c));
  }

  //1
  fill(221, 186, 163);
  beginShape();
  vertex(568, 315);
  vertex(571, 345);
  vertex(617, 335);
  endShape(CLOSE);
  //2
  fill(238, 210, 199);
  beginShape();
  vertex(568, 315);
  vertex(609, 274);
  vertex(617, 335);
  endShape(CLOSE);
  //3
  fill(243, 221, 206);
  beginShape();
  vertex(568, 315);
  vertex(609, 274);
  vertex(547, 255);
  endShape(CLOSE);
  //4
  fill(168, 188, 215);
  beginShape();
  vertex(592, 209);
  vertex(609, 274);
  vertex(547, 255);
  endShape(CLOSE);
  //5
  fill(165, 186, 216);
  beginShape();
  vertex(592, 209);
  vertex(609, 274);
  vertex(653, 229);
  endShape(CLOSE);
  //6
  fill(142, 169, 207);
  beginShape();
  vertex(674, 310);
  vertex(609, 274);
  vertex(653, 229);
  endShape(CLOSE);
  //7
  fill(231, 199, 187);
  beginShape();
  vertex(674, 310);
  vertex(609, 274);
  vertex(617, 335);
  endShape(CLOSE);
  //8
  fill(217, 172, 143);
  beginShape();
  vertex(674, 310);
  vertex(708, 334);
  vertex(645, 360);
  endShape(CLOSE);
  //9
  fill(131, 166, 203);
  beginShape();
  vertex(674, 310);
  vertex(708, 334);
  vertex(696, 271);
  vertex(653, 229);
  endShape(CLOSE);
  //10
  fill(83, 125, 173);
  beginShape();
  vertex(755, 269);
  vertex(696, 271);
  vertex(653, 229);
  endShape(CLOSE);
  //11
  fill(50, 77, 115);
  beginShape();
  vertex(755, 269);
  vertex(696, 271);
  vertex(785, 327);
  endShape(CLOSE);
  //12
  fill(31, 15, 16);
  beginShape();
  vertex(708, 334);
  vertex(696, 271);
  vertex(785, 327);
  endShape(CLOSE);
  //13
  fill(63, 62, 73);
  beginShape();
  vertex(708, 334);
  vertex(752, 377);
  vertex(785, 327);
  endShape(CLOSE);
  //14
  fill(26, 12, 13);
  beginShape();
  vertex(846, 319);
  vertex(818, 265);
  vertex(785, 327);
  endShape(CLOSE);
  //15
  fill(36, 35, 47);
  beginShape();
  vertex(755, 269);
  vertex(818, 265);
  vertex(785, 327);
  endShape(CLOSE);
  //16
  fill(47, 67, 96);
  beginShape();
  vertex(755, 269);
  vertex(818, 265);
  vertex(757, 229);
  endShape(CLOSE);
  //17
  fill(107, 144, 187);
  beginShape();
  vertex(755, 269);
  vertex(653, 229);
  vertex(757, 229);
  endShape(CLOSE);
  //18
  fill(161, 183, 212);
  beginShape();
  vertex(676, 163);
  vertex(653, 229);
  vertex(757, 229);
  endShape(CLOSE);
  //19
  fill(174, 189, 210);
  beginShape();
  vertex(676, 163);
  vertex(653, 229);
  vertex(592, 209);
  endShape(CLOSE);
  //20
  fill(174, 191, 210);
  beginShape();
  vertex(676, 163);
  vertex(583, 149);
  vertex(592, 209);
  endShape(CLOSE);
  //21
  fill(162, 183, 208);
  beginShape();
  vertex(676, 163);
  vertex(583, 149);
  vertex(671, 118);
  endShape(CLOSE);
  //22
  fill(113, 139, 171);
  beginShape();
  vertex(676, 163);
  vertex(739, 126);
  vertex(671, 118);
  endShape(CLOSE);
  //23
  fill(138, 171, 205);
  beginShape();
  vertex(676, 163);
  vertex(739, 126);
  vertex(757, 229);
  endShape(CLOSE);
  //24
  fill(134, 168, 206);
  beginShape();
  vertex(825, 215);
  vertex(739, 126);
  vertex(757, 229);
  endShape(CLOSE);
  //25
  fill(61, 66, 81);
  beginShape();
  vertex(825, 215);
  vertex(818, 265);
  vertex(757, 229);
  endShape(CLOSE);
}
