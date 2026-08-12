// const http = require('node:http');
// import http from "http"

// const hostname = '127.0.0.1'; 
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//import by name
// import {a, b} from "./mymodule.js"
// console.log(a, b);



//import by default (can be import by any name)
// import moiz from "./mymodule.js"
// console.log(moiz);





//through require
const a = require("./mymodule2")
console.log(a, __dirname, __filename);
