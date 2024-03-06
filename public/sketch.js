let slider;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("sketch-div");

  slider = createSlider(0.2, 1, 0.5, 0.1);
  slider.size(100);
  //slider.position(10, 300);
  slider.parent("sketch-div");
}

function parabola(origin, factor, acc) {
  stroke(0, 0, 255);

  for (let x = 0; x < 16; x += acc) {
    let y = pow(x, 2) * factor;

    point(x * factor + 200, 200 - y);
    point(x * -factor + 200, 200 - y);
  }
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  noFill();

  let steps = 10;
  let acc = slider.value();

  let origin = { x: width * 0.5, y: height * 0.5 };

  // The two parameters of the point() method each specify
  // coordinates.
  // The first parameter is the x-coordinate and the second is the Y
  stroke(255);
  line(0, height * 0.5, width, height * 0.5);
  line(width * 0.5, 0, width * 0.5, height);

  stroke(255, 0, 0);
  strokeWeight(5);
  for (let i = 0; i <= width / steps; i++) {
    point(i * steps, 200);
    point(200, i * steps);
  }

  parabola(origin, steps, acc);
}
