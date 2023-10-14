var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.methods, req.headers, req.url);
  res.end("Welcome!");
}

server.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
