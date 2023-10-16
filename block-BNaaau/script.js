var http = require("http");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url, req.headers);
  res.end();
}

server.listen(5000, () => {
  console.log("Server listening on pots 5000");
});

server.listen(5100, () => {
  console.log("Server listening on pots 5100");
});
