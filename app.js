const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  console.log("hariom mishra")
  res.end()
});

server.listen(4000);