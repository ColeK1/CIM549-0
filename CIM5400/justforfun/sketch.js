var an;
var field;
var cole;
var heart;
var looking;



function preload(){
  field = loadImage('field.jpg');
  an = loadImage('an.png');
  cole = loadImage('cole.png');
  heart = loadImage('heart.png');
  looking = loadImage('looking.png');
}
function setup(){
  createCanvas(800, 600);
}
function draw(){
  tint(255);
  image(field, -100, -100);
  tint(255);
  image(looking, 350, 150, 200, 200);
  tint(255);
  image(cole, 300, 200, 550, 550);
  tint(255);
  image(heart, mouseX, mouseY, 250, 250)
  tint(255);
  image(an, 20, 50, 550, 550);
}
