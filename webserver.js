// First Node app - a webserver which sends back Hello World string
var http = require('http');

 // Function callback when an HTTP request comes in
function onRequest(req,res) {
    console.log('Request received on port');
    res.writeHead(200, { 'content-type':'text/plain' } );
    res.write('hello world\n');
    res.end();
 };

 // HTTP server creation and port binding
http.createServer(onRequest).listen(8000);
console.log("HTTP Server listening at port 8000");
