// function setup(){
//   createCanvas(400, 200);
//   background(204);
// }
//
// function rubikscube(){
// fill(255,0,0);
// rect (75, 25, 25, 25);
// fill(0,255,0);
// rect (100, 25, 25, 25);
// fill(0,0,255);
// rect (75, 50, 25, 25);
// fill(255,0,107);
// rect (100, 50, 25, 25);
// }
//
// function draw(){
// rubikscube();
// }


// function setup(){
//   createCanvas(500, 250);
//   background(204);
//   rubikscube(10,10)
//   rubikscube(80,120)
//   rubikscube(250,30)
//   rubikscube(360,80)
// }
//
// function rubikscube(x,y){
// fill(255,0,0);
// rect (x, y, 50, 50);
// fill(0,255,0);
// rect (x+50, y, 50, 50);
// fill(0,0,255);
// rect (x, y+50, 50, 50);
// fill(255,0,107);
// rect (x+50, y+50, 50, 50);
// }
//
// function draw(){
// rubikscube();
// }
//
// function setup(){
//   createCanvas(480,120);
//   textSize(24);
//   textAlign(CENTER);
//   background(204);
//   rollDice(160,60);
//   rollDice(320,60);
// }
// function rollDice(x,y){
//   var number = 1+int(random(6));
//   text(number, x, y);
// }
//
// function setup(){
//   createCanvas(480,120);
//   textSize(24);
//   textAlign(CENTER);
//   background(204);
//   var number = rollDice();
//   if(number == 1) {
//     fill(255,0,0);
//   }else if(number == 2) {
//     fill(0,0,255);
//   }else if(number == 3) {
//     fill(0,255,0);
//   }else {
//     fill(255,0,255);
//   }
//   rect(100,10,50,50);
// }
//
// function rollDice(){
//   var number = 1+int(random(4));
//   return number;
// }

// function Spaceship(initX, initY){
//   this.x = initX;
//   this.y = initY;
//
//   this.move = function(){
//     this.x += random(-5,5);
//   }
//   this.display = function(){
//     ellipse(this.x, this.y, 10, 10);
//   }
// }
//
// var ship;
//
// function setup()

// function setup(){
//   createCanvas(480,240);
//   background(204);
//   angleMode(DEGREES);
// }
//
// function draw(){
// ellipse(240, 120, 80, 80);
// ellipse(240-20, 120-20, 2, 2);
// ellipse(240+20, 120-20, 2, 2);
// arc(240, 120, 40, 40, 45, 135);
// }
//
// // constructor for smiley
// function Smiley(initX, initY, size){
//   // properties: location (x, y);
//   this.x = initX;
//   this.y = initY;
//   this.size = size;
//   // methods: smile()
// this.smile = function(){
//   ellipse(this.x, this.y, this.size, this.size)
//   ellipse(this.x-this.size/4, this.y-this.size/4,2,2);
//   ellipse(this.x+this.size/4, this.y-this.size/4,2,2);
//   arc(this.x, this.y, this.size/2, this.size/2, 45,135);
//   }
// }

function Smiley(initX, initY, size){
  // properties: location (x, y);
  this.x = initX;
  this.y = initY;
  this.size = size;
  // methods: smile()
this.smile = function(){
  ellipse(this.x, this.y, this.size, this.size)
  ellipse(this.x-this.size/4, this.y-this.size/4,2,2);
  ellipse(this.x+this.size/4, this.y-this.size/4,2,2);
  arc(this.x, this.y, this.size/2, this.size/2, 45,135);
  }
}

var Smiley1;

function setup(){
  createCanvas(480,240);
  background(204);
  angleMode(DEGREES);
  Smiley1 = new Smiley(width/2, height/2, 80);
}

function draw(){
Smiley1.smile();
}
