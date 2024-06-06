require('dotenv').config();

const http = require('http');
const express = require('express');
const imagerRoute = require('./routes/api/imager');
const app = express();

const port = process.env.PORT || 3000; // You can use environment variables for port configuration

// app.get('/', (req, res) => {
//     res.send('<h1>Hello, Express.js Server!</h1>');
// });

app.use('/imager', imagerRoute);

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
})

// Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Set the response headers
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     // Write the response content
//     res.write('<h1>Hello, Node.js Express Server!</h1>');
//     res.end();
// });

// server.listen(port, () => {
//     console.log(`Express Server is running on port ${port}`);
// });
