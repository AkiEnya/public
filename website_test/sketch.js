let distance = 1000;
let cam;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  normalMaterial();
  cam = createCamera();
}

function draw() {
  cam.setPosition(distance, distance, distance);
  cam.lookAt(0, 0, 0);

  background(220);
  
  axes(400, 6);
  
  push();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  
  axes(300, 3);
  
  strokeWeight(0);
  box(200);
  pop();
}

function axes(length, weight) {
  strokeWeight(weight);
  stroke(color(255, 0, 0));
  line(0, 0, 0, length, 0, 0);
  stroke(color(0, 255, 0));
  line(0, 0, 0, 0, length, 0);
  stroke(color(0, 0, 255));
  line(0, 0, 0, 0, 0, length);
}

function mouseWheel(event) {
  if (event.delta > 0) {
    distance += 50;
  } else {
    distance -= 50;
  }
}