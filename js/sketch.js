let stepX = 10;
let stepY = 3;

function setup() {
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    var canvas = createCanvas(width, 400);
    canvas.parent('sketch-holder');
}

function draw() {
  background(0);
  noFill();
  stroke(255, 180);
  for(let y = -100; y < height; y+=stepY){
    beginShape();
    for(let x = 0; x <= width; x+=stepX){
      vertex(x, y + noise(x/150, y/100, frameCount/180) * 100);
    }
    endShape();
  }
  //noLoop()
}

function windowResized() {
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    resizeCanvas(width, 400);
  }