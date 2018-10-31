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


// var x = 80;
// var y = 0;
// var speed = 5;
//
// function setup(){
//   createCanvas(380,210);
// }
//
// function draw(){
//   background(0);
//   stroke(255);
//   y += speed;
//   line(x,y,x,y+20);
//   if (y > height){
//     y=0;
//   }
// }

// var x = 80;
// var y = 0;
// var speed = 5;
//
// function setup(){
//   createCanvas(480,120);
// }
//
// function draw(){
//   background(0);
//   stroke(255);
//   y += speed;
//   line(x,y,x,y+20);
//   line(2*x, y-30, 2*x, y+20-30);
//   line(3*x, y+30, 3*x, y+20-30);
//   line(4*x, y-10, 4*x, y+20-10);
//   if (y > height){
//     y=0;
//     x = random(0, width);
//   }
// }


// var y = 60
// var speed = 5;
// var x = 80;
// var y = 0;
//
// function setup(){
//   createCanvas(480,120);
// }
//
// function draw(){
//   background(0)
  // currentTime = millis();
  // if(currentTime > 2000){
  //   y += speed;
  //   if(y > height) {
  //     y = 0;
//     }
//   }
//   fill(255, 255, 0);
//   ellipse(width/2, y, 30,30);
// }

// var x = 80;
// var y = 0;
// var speed = 5;
//
// function setup(){
//   createCanvas(480,120);
// }
//
// function draw(){
//   background(0);
//   stroke(255);
//   currentTime = millis();
//   if(currentTime > 2000) {
//   y += speed;
//   line(x,y,x,y+20);
//   line(2*x, y-30, 2*x, y+20-30);
//   line(3*x, y+30, 3*x, y+20-30);
//   line(4*x, y-10, 4*x, y+20-10);
//
//   if (y > height){
//     y=0;
//     x = random(0, width);
//   }
// }
// }

// var angle = 0;
// var x = 0;
//
// function setup() {
//   createCanvas (480,120);
//   angleMode(DEGREES);
//
// function draw(){
//   background(0);
//   var y = sin(angle);
//   ellipse(x, height/2+y*height/3, 20, 20);
//   angle += 20;
//   x += 10;
//   if(x > width){
//     x = 0;
//    }
//   }

var angle =0;
function setup() {
  createCanvas (480,120);
  angleMode(DEGREES);

function draw(){
  background(255);
  fill(0, 0, 255);
  for(var X = 0; x < width; x+=10){
    var y = sin(x);
    ellipse(x, height/2+y*30, 10, 10);
  }
  angle+=10:
}
}
