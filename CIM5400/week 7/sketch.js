var corgi;
var behind;

function preload(){
  corgi = loadImage('corgi.jpg');
  behind = loadImage('behind.jpg')
}

function setup(){
  createCanvas(480, 240);
}

function draw(){
  background(204);
  image(corgi, mouseX, mouseY, 240, 120)
  image(behind, 240, 120, 240, 120)
}

//
// var bgImg;
// var houseImg;
//
// function preload(){
//   bgImg = loadImage('lake.jpg');
//   houseImg = loadImage('house.png');
// }
//
// function setup(){
//   createCanvas(480, 300);
//
// }
//
// function draw(){
//   image(bgImg, 0, 0);
//   // Apply transparency without changing color
//   tint(255, 20);
//   image(houseImg, 20, 100, 400, 200);
// }


// var houseImg;
//
// function preload(){
//   houseImg = loadImage('house.png');
// }
// function setup(){
//   createCanvas(600, 300);
// }
// function draw(){
//   tint(255);
//   image(houseImg, 20, 50, 200, 100);
//   // house is green
//   tint(0, 255, 0);
//   image(houseImg, 200, 50, 200, 100);
//   // house is purple
//   tint(125, 125, 255);
//   image(houseImg, 400, 50, 200, 100);
// }


// function draw(){
//   background(204);
//   strokeWeight(2);
//   line(80,80,160,80);
//
//   push();
//   if(angle == 90){
//     direction = -1;
//   }
//   if(angle == -90){
//     direction = 1;
//   }
//   angle = angle +5*direction;
//   translate(120, 80);
//   rotate(angle);
//   strokeWeight(10);
//   line(0,0,0,80);
//   pop();
// }
//
// var button;
// var count = 0;
//
// function setup(){
//   createCanvas(240, 240);
//   textSize(24);
//   textAlign(CENTER);
//   fill(255);
//
//   button = createButton('click');
//   button.position(200,200);
//   button.mousePressed(increaseCount);
// }
//
// function increaseCount(){
//   count += 1;
// }
// function draw(){
//   background(0);
//   text(count, 120, 120);
// }
//
// var button;
// var count = 0;
//
// function setup(){
//   createCanvas(240, 240);
//   textSize(24);
//   textAlign(CENTER);
//   fill(255);
//
//   button = createButton('click');
//   button.position(200,200);
//   button.mousePressed(increaseCount);
// }
//
// function increaseCount(){
//   count += 1;
// }
// function draw(){
//   background(0);
//   text(count, 120, 120);
// }
