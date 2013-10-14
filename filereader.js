// Include modules
var http = require("http"),
    fs = require("fs");
 
// Callback function to read a file and update count
function readFileCallback(request, response) {
    
    if(request.url == '/') {  
        // Read the file.
        fs.readFile("test.txt", 'utf-8', function (error, data) {
                // Write headers.
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            // Increment the number obtained from file.
            data = parseInt(data) + 1;
            // Write incremented number to file.
            fs.writeFile('test.txt', data);
            // End response with some nice message.
            response.end('This page was refreshed ' + data + ' times!');
      });
    } else {
	response.writeHead(404);
	response.end();
    }
}

http.createServer(readFileCallback).listen(8003);

console.log("File Reader server started on port 8003");
