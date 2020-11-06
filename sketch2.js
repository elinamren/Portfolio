function setup() {
  var canvas = createCanvas(480, 480);

  background("#EDF5E1");
}

function draw() {
  if (mouseIsPressed) {
    fill("#8ee4af");
  } else {
    fill("#EDF5E1");
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function sketchCircle(p) {
  p.setup = function () {
    p.createCanvas(480, 480);
  };

  function draw() {
    if (mouseIsPressed) {
      fill("#8ee4af");
    } else {
      fill("#EDF5E1");
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
}
new p5(sketch_idnameofdiv, "circle-canvas");
