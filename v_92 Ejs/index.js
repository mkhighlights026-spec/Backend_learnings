const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let brnad = "Moiz khan"
    let search = "search now"
  res.render("index",{brand: brnad, search})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});