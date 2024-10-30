let img;

function preload() {
  img = loadImage("jj.png");
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  //background(220);
  image(img, 0, 0);
}
