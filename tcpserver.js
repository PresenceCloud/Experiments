// Node program which opens a TCP/IP port for listen
var net = require('net');
var PORT = 8001;

// Listen on TCP port and echo whats typed in
var server = net.createServer(function(socket) {
    socket.write('Hello There! Type in something for me to echo.... \n');
    // socket.end();
    socket.on('data', function(data) {
	socket.write(data);
    });
});

server.listen(PORT);
console.log("TCP Server Listening on port 8001");
