let bg;
let y = 0;
let showText = false;

function setup() {
  bg = loadImage('images/page1_asset.png');
  createCanvas(600, 400);
}

function draw() {
  background(bg);
  if(showText){
    textSize(29);
    fill('white');
    textFont('Judson');
    text(' First, I have to tell you about the city at that time.',     50, 290, 350, 350);
  }
}
  
function mousePressed() {
  showText = true;
}