const url = require("url");


const pathname = req.url;
if (pathname === "/" || pathname === "/overview") {
  res.end("This is the OVERVIEW");
} else if (pathname === "/product") {
  res.end("This is the PRODUCT");
} else {
  res.writeHead(404, {
    "content-type": "text/html",
    "my-own-header": "hello world",
  });
  res.end("<h1>page not found</h1>");
}