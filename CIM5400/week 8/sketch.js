// var x =0;
// var speed = 5;
// var raadius = 40;
//
// function setup(){
// createCanvas(480, 120);
// angleMode(DEGREES);
// }
//
// function draw(){
//   background(0);
//   x += speed;
//   if(x > width){
//     x = 0;
//   }
//   fill(255, 255, 0);
//   arc(x, 60, radius, radius, 45, 315);
// }

// var direction = 1;
//
// function draw(){
//   background(0);
//   fill(255,255,0);
//   if(direction ==1){
//     x += speed;
//     arc(x, 60, radius, radius, 45, 315);
//     if(x > width) {
//       direction = -1;
//     }
//   }else{
//     x -= speed;
//     arc((x, 60, radius, radius, 255, 135);
//     if(x < 0){
//       direction = 1;
//     }
//   }
// }


var x = 80;
var y = 0;
var speed = 5;

function setup(){
  createCanvas(380,210);
}

function draw(){
  background(0);
  stroke(255);
  y += speed;
  line(x,y,x,y+20);
  if (y > height){
    y=0;
  }
}
