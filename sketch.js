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
  if (mouseIsPressed == true) {
    console.log("mouseX: " + mouseX, "mouseY: " + mouseY);
  }
}
