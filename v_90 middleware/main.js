const express = require('express');
const app = express();
const port = 3000;
const fs  = require("fs")


app.use(express.static("public"))


const myLogger = function (req, res, next) {
    req.harry = `moiz khan`
    fs.writeFileSync("logs.txt",`logged at ${Date.now()} and method is ${req.method}`)
  console.log(`logged at ${Date.now()} and method is ${req.method}`);
  next();
};

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/contect', (req, res) => {
  res.send(`Hello contect! and ${req.harry}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});