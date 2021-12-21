const { readFileSync, writeFileSync } = require("fs");

//console.log(fs);

const read = readFileSync("./content/first.txt", "utf8");
console.log(read);
