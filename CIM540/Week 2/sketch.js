function setup() {
  createCanvas(800, 400);
  background(200);
}

function draw() {
  fill(0);
  beginShape();
  vertex (5, 140)
  vertex (10, 100)
  vertex (120, 60)
  vertex (220, 10)
  vertex (230, 70)
  vertex (150, 80)
  vertex (200, 100)
  vertex (200, 100)
  vertex (150, 130)
  endShape();
  fill(255, 255, 0);
  ellipse(155,60, 8, 8)

fill(0);
  rect(130, 100, 10,80);
  rect(150, 100, 10,80);
  rect(30, 100, 10,80);
  rect(10, 100, 10,80);
  ellipse(80,125, 150,80)



}
