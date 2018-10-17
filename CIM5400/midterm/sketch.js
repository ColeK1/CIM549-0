var x = 60;
var y = 50;
var mazeone;
var button;
var pressed = 0;
var mazetwo;
var dog;

function preload(){
  mazeone = loadImage('mazeone.png');
  mazetwo = loadImage('mazetwo.png');
  dog = loadImage('dog.png');
}

function setup (){
// put setup code here
  createCanvas(400,400);
  button = createButton('next');

}

function mazeAppear(){
  pressed = 1;
}

function draw(){
  tint(255);
  image(mazeone, 10, 10);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
    } else if(keyCode == RIGHT_ARROW) {
      x = x + 5;
    }else if(keyCode == UP_ARROW){
      y = y - 5;
    }else if(keyCode == DOWN_ARROW){
      y = y + 5;
    }

  }
  image(dog, x, y, 30, 30);

  if(pressed == 0){
    button.position(320,320);
    button.mousePressed(mazeAppear);
  } else {
    button.position(20,20);

  }
  if(pressed){
    image(mazetwo, 12, 10);
    image(dog, x, y, 30, 30);
  }
}
