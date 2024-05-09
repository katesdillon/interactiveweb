let bg;
let y = 0;
let showText = false;

function preload(){
  bg = createImg('sing.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg.position(width/14, height/50);  
  let a = createA('page2.html', 'Continue...');
  a.position(1300, 750);
  a.style('font-family', 'Judson'); 
  a.style('color', 'black'); 
  a.style('text-decoration', 'none')
  a.style('font-size', '20pt')
  a.style('opacity', '50%')
}

function draw() {
 // background(bg);
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