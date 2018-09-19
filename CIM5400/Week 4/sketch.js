var d = 10;
var y = 20;

function setup() {
  createCanvas(480, 120);
  strokeWeight(2)
  nofill();
}

function draw(){
  for(var j= 1; j<6; j+=2){
    line(o,y*j, 480, y*j);
    for(var i = 1; i<61; i+=2){
      ellipse(d*I, y*j, d, d);
    }
  }
}

}
