function setup() {
  createCanvas(900, 600);
  background(204);
}

var x = 100
var y = 60
var d = 90
var s = 40

function draw() {

rect (x, y, s, s)
rect (x+d, y, 2*s, 2*s)
rect (2.5*x+d, y, 3*s, 3*s)

}
