var x = 60;
function setup (){
// put setup code here
  createCanvas(120,120);
}
function draw(){
  background(0);
  fill(255);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW) {
      x = x - 5;
    } else if(keyCode == RIGHT_ARROW) {
      x = x + 5;
    }
  }
  rect(x, 60, 10, 10);
}
