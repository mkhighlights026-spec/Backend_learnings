const express = require('express');
const app = express()
const port = 3000

app.use(express.static('public')); //middleare use for serving static files

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog/:slug', (req, res) => {
    console.log(res);
    
  res.send(`hello ${req.params.slug}`)
})
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })
// app.get('/home', (req, res) => {
//   res.send('Hello home!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})