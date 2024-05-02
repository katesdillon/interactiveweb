let bg;
var x;
var y;
var carX = 0;
var carY = 0;
var img;

function preload() {
  img = loadImage('car.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('page3base.jpg');
  createCanvas(windowWidth, windowHeight);
  let a = createA('finalpage.html', 'Continue...');
  a.position(1400, 750);

}

function draw() {
  imageMode(CORNER); 
  background(bg);
  imageMode(CENTER); 
  image(img, carX, carY, 50, 50);
 
}

function mousePressed() {
     carX = mouseX;
      carY = mouseY
}

function mouseDragged() {
  if ((mouseX > carX - 50) && (mouseX < carX + 50)) {
    if ((mouseY > carY - 50) && (mouseY < carY + 50)) {
      carX = mouseX;
      carY = mouseY
    }
  }
}