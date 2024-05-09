let bg;
var x;
var y;
var carX = 1200;
var carY = 550;
var img;

function preload() {
  img = loadImage('car.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('page3base.jpg');

  let a = createA('finalpage.html', 'Continue...');
  a.position(1300, 730);
  a.style('font-family', 'Judson'); 
  a.style('color', 'black'); 
  a.style('text-decoration', 'none')
  a.style('font-size', '20pt')
  a.style('opacity', '50%')

}

function draw() {
  imageMode(CORNER); 
  background(bg);
  imageMode(CENTER); 
  image(img, carX, carY, 500, 500);

  textSize(36);
  fill('black');
  textFont('Judson');
  textAlign(RIGHT);
  text('You could sail down the freeways and pull up and park right in front of wherever it was you were going, and it felt spacious and quiet. You could do your thing in private, and the city would courteously ignore you. I loved it.', width/2.8, height/25, 930, 300);
 
}

function mousePressed() {
  carX = mouseX;
  carY = mouseY;
}

function mouseDragged() {
  if ((mouseX > carX - 50) && (mouseX < carX + 50)) {
    if ((mouseY > carY - 50) && (mouseY < carY + 50)) {
      carX = mouseX;
      carY = mouseY
    }
  }
}