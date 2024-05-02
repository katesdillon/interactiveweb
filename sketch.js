let bg;
let y = 0;
let showText = false;

function preload(){
  bg = loadImage('sing.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let a = createA('page2.html', 'Continue...');
  a.position(1400, 750);
}

function draw() {
  background(bg);
  textSize(20);
  fill('black');
  textFont('Judson');

}

  
function mousePressed() {
  //showText = true;
  click(); 
}

function click(){
    textSize(35);
    fill('black');
    textFont('Judson');
    text('First, I have to tell you about the city at that time.',200, 700);
}