// Define variables for planet images and a satellite
let firstRun = true;
let jupiter;
let earth;
let mars;
let neptune;
let satellite;
let saturn;

// Function to draw a star with four lines at a specified position and length
function star(x, y, length) {
  // Horizontal line
  h_start_x = x - length/2;
  h_start_y = y;
  h_end_x = x + length/2;
  h_end_y = h_start_y;
  line(h_start_x, h_start_y, h_end_x, h_end_y);

  // Vertical line
  v_start_x = x;
  v_end_x = v_start_x;
  v_start_y = y - length/2;
  v_end_y = y + length/2;
  line(v_start_x, v_start_y, v_end_x, v_end_y);

  // Diagonal lines
  d1_start_x = x - length/3;
  d1_end_x = x + length/3;
  d1_start_y = y - length/3;
  d1_end_y = y + length/3;
  line(d1_start_x, d1_start_y, d1_end_x, d1_end_y);

  d2_start_x = x - length/3;
  d2_end_x = x + length/3;
  d2_start_y = y + length/3;
  d2_end_y = y - length/3;
  line(d2_start_x, d2_start_y, d2_end_x, d2_end_y);
}

// Function to draw one frame of the animation based on input parameters
function draw_one_frame(words, vocal, drum, bass, other, frameCount) {
  // Load planet images on the first run
  if (firstRun) {
    rectMode(CENTER);
    saturn = loadImage('/images/Saturn.svg');
    mars = loadImage('/images/Mars.svg');
    jupiter = loadImage('/images/Jupiter.svg');
    neptune = loadImage('/images/Neptune.svg');
    earth = loadImage('/images/Earth.svg');
    satellite = loadImage('/images/Satellite.svg');

    firstRun = false;
  }

  // Set the background color
  background(20);

  // Map volume values to chosen range for positioning images
  let mappedBass = map(bass, 0, 100, -20, 20);
  let mappedDrum = map(drum, 0, 100, -20, 20);
  let mappedVocal = map(vocal, 0, 100, -20, 20);
  let mappedOther = map(other, 0, 100, -20, 20);

  // Position and resise planet and satellite images based on volume values
  image(mars, mappedBass + 350, 200);
  image(saturn, 1300 - mappedDrum, 200);
  image(jupiter, mappedVocal + 350, 620);
  image(neptune, 1380 - mappedOther, 620);
  satellite.resize(70, 70);
  image(satellite, 1050, 300);
  earth.resize(200, 200);
  image(earth, 850, 380);

  // Draw stars with colors based on bass volume
  push();
  fill('yellow');
  stroke('yellow');
  strokeWeight(3);
  star(1300, 600, mappedBass - 20);
  star(709, 100, mappedBass - 10);
  star(1230, 100, mappedBass - 12);
  star(600, 200, mappedBass - 5);
  star(780, 500, mappedBass - 4);
  star(980, 860, mappedBass - 20);
  star(640, 760, mappedBass - 15);
  pop();

  // Display text with font size based on vocal volume
  textAlign(CENTER);
  textSize(mappedVocal + 20);
  fill(355);
  text(words, width / 2, height / 3);
}