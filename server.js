const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=> {
    console.log(req.headers);
    req.statusCode = 200;
    res.setHeader('content-type','text/html');
    res.end('<html><h1>Hello World</h1></html>');
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http//:${hostname}:${port}`);
})