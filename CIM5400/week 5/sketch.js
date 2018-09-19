function setup() {
  createCanvas(480, 120);
  background(204);

}
function draw(){
fill(255, 0,0);
if(mouseIsPressed){
  fill(0,255,0);
} else if(mouseButton == RIGHT){
  fill(255, 255,0);
}
ellipse(240,60,50,50);
}
