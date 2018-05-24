const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello world! \n');
}).listen(8090,'localhost',);

console.log('Server is running at: localhost:8090');