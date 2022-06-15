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

