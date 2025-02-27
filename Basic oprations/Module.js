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



//2.URL
// const myUrl = newURL('https://example.com:8000/path/name?query=test#hash');
// console.log('Href:',myUrl.href);
// console.log('Protocol:',myUrl.protocol);
// console.log('Host:',myUrl.host);
// console.log('Hostname:',myUrl.hostname);
// console.log('Port:',myUrl.port);
// console.log('Pathname:',myUrl.pathname);
// console.log('Search:',myUrl.search);
// console.log('SearchParams:',myUrl.searchParams);
// console.log('Hash:',myUrl.hash);