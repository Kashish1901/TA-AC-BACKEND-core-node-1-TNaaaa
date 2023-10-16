var http = require("http");
var fs = require("fs");

var server = http.createServer(hanldeRequest);

function hanldeRequest(req, res) {
  if (req.method === "GET" && req.url === "/file") {
    fs.createReadStream("./node.html").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("Server listening on port 5555");
});
