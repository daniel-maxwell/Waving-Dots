let freq = 0.06;
let phaseAngle = 0.4 
let waveLength = 0.4;
let XYoffset = 0.3;
let locX, locY;
let prevX = 0, prevY = 0;
var translateAmt;

function setup()
{
    createCanvas(500, 500);
    background(255);
}

function draw()
{
    background(255);
    var noOfDots = 20;
    var size = width/noOfDots;
    
    for (var x = 0; x < noOfDots; x++)
    {
      for (var y = 0; y < noOfDots; y++)
      {
        // Noise generation for colour
        const mappedNoise = map(noise(x/100, y/100, random(x*y)), 0, 1, 0, 255);
        // Dot colour
        const c = color(mappedNoise +235, mappedNoise, mappedNoise+127); // Dot colour

        // Calculate X Y positions of dots
        locX = cos((freq*frameCount) + (phaseAngle*x) + (phaseAngle*y)) * size; 
        locY = sin((freq*frameCount) + (phaseAngle*x) + (phaseAngle*y)) * size;
        diam = size/2 - (0.07* (locX + locY));
        
        push();
        translateAmt = translate(x*30, y*30);
        wave(locX, locY, diam, c);
        prevX = locX
        prevY = locY
        pop();
      }
    }

    // Check the mouse is inside the canvas before updating Phase angle or Frequency
    if (!(mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0)) {
        phaseAngle += map(mouseX/2, 0, width, -0.001, 0.001)
        phaseAngle = constrain(phaseAngle, -0.35, .35);
        freq += map(mouseX/2, 0, width, -0.000001, 0.0001);
        freq = constrain(freq, -0.4, 0.5);
    }
}


function wave(x, y, diam, colour)
{
    fill(colour);
    dot = circle(x, y, diam);
}