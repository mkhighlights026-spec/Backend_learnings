const express = require('express');
const app = express()
const port = 3000

app.use(express.static("public"));


const blog = require('./routes/blog');
app.use('/blog', blog);
const shop = require('./routes/shop');
app.use('/shop', shop);



app.get('/', (req, res) => {
    console.log('This is a get request');
  res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log('This is a post request');
  res.send('Hello post!')
})


app.get("/index",(req, res) => {
  res.sendFile('/tamplates/index.html',{root: __dirname})//sendFiles() is use to serve html files
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})