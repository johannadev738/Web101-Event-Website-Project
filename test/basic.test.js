const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

if (!html.includes("<title>")) {
  throw new Error("Missing title");
}

console.log("Test passed");
