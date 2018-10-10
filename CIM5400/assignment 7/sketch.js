var gs;
var field;
var looking;
var flying;



function preload(){
  field = loadImage('field.jpg');
  gs = loadImage('gs.png');
  looking = loadImage('looking.png');
  flying = loadImage('flying.png');
}
function setup(){
  createCanvas(800, 600);
}
function draw(){
  tint(255);
  image(field, -100, -100);
  tint(255);
  image(looking, 560, 195, 150, 150);
  tint(255);
  image(flying, mouseX, mouseY, 200, 250)
  tint(255);
  image(gs, 20, 350, 150, 250);
  // house is green
  tint(0, 255, 0);
  image(gs, 170, 350, 150, 250);
  // house is purple
  tint(125, 125, 255);
  image(gs, 320, 350, 150, 250);
}
