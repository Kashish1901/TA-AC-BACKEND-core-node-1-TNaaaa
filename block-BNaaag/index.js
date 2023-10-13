var fs = require("fs");

fs.readFile("./content.md", (err, file) => {
  console.log(err, file.toString());
});

var buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer").toString();

console.log(buff1);
