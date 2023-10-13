var fs = require("fs");

fs.readFile("./content.md", "utf8", (err, content) => {
  console.log(content);
});

var result = fs.readFileSync("./content.md", "utf8");
console.log(result);

var buff1 = Buffer.alloc(10);

buff1.write("Welcome to Buffer");

console.log(buff1);
