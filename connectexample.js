connect = require('connect');
app = connect();
app.listen(3001);

app.use (req, res) -> 
res.writeHead(200, {'Content-Type':'text/plain' })
res.end('Hello World Connect\n')

console.log('Server stated at 3001');
