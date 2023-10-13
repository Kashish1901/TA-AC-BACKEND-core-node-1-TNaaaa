console.log("Welcome to Node.js");

var os = require("os");
var { readFile, unlink } = require("fs");
var area = require("./area");
var url = require("url");

var parsedUrl = url.parse(
  "https://airindia.com/fares/calculate?from=delhi&to=detroit",
  true
);
var cpus = os.cpus.length;
var freeM = os.freemem();
var version = os.version;
var uptime = os.uptime();

console.log(cpus, freeM, version, uptime);

var buff1 = Buffer.alloc(12);

var buff2 = Buffer.allocUnsafe(12);
buff1.write("Hello World!");
console.log(buff1.toString());
console.log(buff2);

console.log(parsedUrl.query, parsedUrl.pathname, parsedUrl.protocol);
