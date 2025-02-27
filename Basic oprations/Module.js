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


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the Home Page');
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the About Page');
//     } else if (req.url === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the Contact Page');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });



//2.URL

// const { URL } = require('url');

// const myUrl = new URL('https://example.com:8080/path/name?query=123#fragment');

// console.log('Full URL:', myUrl.href);
// console.log('Protocol:', myUrl.protocol);
// console.log('Host:', myUrl.host);
// console.log('Hostname:', myUrl.hostname);
// console.log('Port:', myUrl.port);
// console.log('Pathname:', myUrl.pathname);
// console.log('Query String:', myUrl.search);
// console.log('Fragment:', myUrl.hash);


// const http = require('http');
// const { URL } = require('url');
// const server = http.createServer((req, res) => {
//     const reqUrl = new URL(req.url, `http://${req.headers.host}`); // Parse the request URL
//     if (reqUrl.pathname === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the Home Page');
//     } else if (reqUrl.pathname === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the About Page');
//     } else if (reqUrl.pathname === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the Contact Page');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });


//3.querystring
// const querystring = require('querystring');
// const queryString = 'name=John&age=25&city=NewYork';
// const parsedData = querystring.parse(queryString);
// console.log(parsedData);
// console.log('Name:', parsedData.name);
// console.log('Age:', parsedData.age);
// console.log('City:', parsedData.city);

// const querystring = require('querystring');
// const data = { name: 'Alice', age: 30, country: 'USA' };
// const queryString = querystring.stringify(data);
// console.log(queryString);

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Query Parameters: ${JSON.stringify(queryParams)}`);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/?name=Bob&age=40`);
});