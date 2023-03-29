var socket;

function setup() {
  createCanvas(600, 400);
  background(51);

  socket = io.connect("192.168.0.107:3000");
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  console.log("Receiving: " + data.x + ' , ' + data.y);
  noStroke();
  fill(255, 0, 10);
  ellipse(data.x, data.y, 30, 30);
}

function mouseDragged() {
  console.log("Sending: " + mouseX + " , " + mouseY);

  var data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", data);

  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);
}

function draw() {}
