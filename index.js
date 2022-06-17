/*
/////////////////////////////////////////////////////////////////////////////

// FILE SYSTEM

// --running Javascript outside the browser

const hello = 'Hello World'
console.log(hello);


// Blocking, synchronous way

const fs = require('fs'); // the fs stands for file system and this line of code simply saves all the functions we have in the 
// file system into the fs variable which is actually and object
// the readFileSync takes in two arguments, first the path to the file you want to read and secondly the character encoding
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('file written successfully');


// Non-blocking, asynchronous way using callbacks ... nodejs is built around the philosophy of callbacks
// the major difference between a regular function and an arrow function is that, a regular function has its own THIS Keyword but an arrow function does not
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return  console.log('An error has occourd:', err);
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('files written');
            })
        })
    })
})
console.log('will read file soon'); 


//////////////////////////////////////////////////////////////////////////////////////

// SERVER

const http = require("http");
// in other to build a server you first need to create the server then start it
const server = http.createServer((req, res) => {
    res.end("Hello from ther Server");
});

// we just created our server above and as you can see there is a callback function that is run as soon as a
// request hits our server and the callback has access to two most important and fundamental variables which
// are the req and res variable 

// and as you can see, our server that was created was actually saved into a variable called server on which we can call
// the listen method on

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to requests on port 8000");
});

// When routing in a big application we always use Express for that but we could also use the nodejs built in url for basic 
// and smaller routing


//////////////////////////////////////////////////////////////////////////////////////

// ROUTING

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
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
});


server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});



//////////////////////////////////////////////////////////////////////////////////////

// SIMPLE API

const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8"); // reads file from a spesific directory and saves it in the data variable which is beign rendered at the /api route
// const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/" || pathname === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathname === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});

*/

//////////////////////////////////////////////////////////////////////////////////////

// HTML TEMPLATE

