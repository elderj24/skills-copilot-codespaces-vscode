// Create web server
// Create a server that listens on port 3000, and responds with the file comments.html when a request is made to the root URL.
// Use the fs module to read the file and send the contents as the response.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});