const express = require('express');
const router = express.Router();



// define the home page route
router.get('/', (req, res) => {
  res.send('blog home page');
});
// define the about page route
router.get('/about', (req, res) => {
  res.send(' about page');
});
// define the blogpost route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`this is blog for ${req.params.slug}`);
});

module.exports = router;