var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  //console.log(req.method, req.url, req.headers);
  //res.end("My first server in NodeJS");
  //console.log(req.headers);
  //res.end(req.headers["user-agent"]);
  //console.log(req.url , req.method)
  //res.end(req.method + req.url)
  //res.end(JSON.stringify(req.headers));
  //res.statusCode = 202;
  //res.setHeader("content-type", "text/html");
  //res.end(`<h3>Welcome to altcampus</h3>`);
  //res.writeHead(202, { "content-type": "text/html" });
  //res.end(`<h3>Welcome to altcampus</h3>`);
  //res.writeHead(202, { "content-type": "application/json" });
  //res.end(JSON.stringify({ success: true, message: "Welcome to Nodejs" }));
  //console.log(req.method);
  //res.writeHead(202, { "content-type": "text/html" });
  //res.end(`<h2>posted for first time</h2>`);
  //if (req.method === "GET" && req.url === "/") {
  //res.setHeader("content-type", "text/plain");
  //res.end("kashish");
  //} else if (req.method === "GET" && req.url === "/about") {
  //res.setHeader("content-type", "text/html");
  //res.end("<h2>kashish</h2>");
  //}  else {
  //res.statusCode = 404;
  //res.end("Page not found!");
  //}}
  //if (req.method === "GET" && req.url === "/users") {
  //  res.setHeader("content-type", "text/html");
  //  fs.createReadStream("./form.html").pipe(res);
  //}

  //if (req.method === "POST" && req.url === "/users") {
  //  res.end("Posted for the second time");
  //}
  var parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname, req.url);
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(parsedUrl.query));
}

//server.listen(5000);

//server.listen(5100);

//server.listen(5555);

//server.listen(5566);

//server.listen(7000, () => {
//console.log("Server listening on port 7000");
//});

//server.listen(3333);

//server.listen(8000, () => {
//console.log("Server listening on port 8000");
//});

//server.listen(8888, () => {
// console.log("server listening on port 8888");
//});

//server.listen(5050, () => {
//console.log("Server listening on port 5050");
//});

server.listen(2345, () => {
  console.log("server listening on port 2345");
});
