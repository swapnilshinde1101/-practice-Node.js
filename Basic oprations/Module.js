//Core Module: 1. http

// const http = require('http'); 

// const server = http.createServer((req, res) => {  
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("hello");
// });

// const PORT = 3000;
// server.listen(PORT, () => {  
//     console.log(`Server running at http://localhost:${PORT}`);
// });


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the About Page');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Contact Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
