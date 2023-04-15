const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  if (req.url == '/home') {
    res.write('<body><h2>Welcome to the Home Page</h2></body>');
  } else if (req.url == '/about') {
    res.write('<body><h1>Welcome to the About Page</h1></body>');
  } else {
    res.write('<body><h1>Welcome to the Node.js Page</h1></body>');
  }
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(9000); // Using port 3000
