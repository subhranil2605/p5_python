var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(3000, "192.168.0.107", function() {
    console.log("Listening on " + server.address().address + ":" + server.address().port);
});

app.use(express.static("public"));

console.log("Server is running");

var io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection " + socket.id);

  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    // io.sockets.emit('mouse', data);
    console.log(data);
  }
}
