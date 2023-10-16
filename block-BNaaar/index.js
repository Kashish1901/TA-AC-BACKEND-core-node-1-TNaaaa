var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/") {
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("content-type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.setHeader("content-type", "text/json");
    res.end("{message: this is a post request}");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h2>PAge not found!");
  }
}

server.listen(5000, () => {
  console.log("Server listening on port 5k");
});
