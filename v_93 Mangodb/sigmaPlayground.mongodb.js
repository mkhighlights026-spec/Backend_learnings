
// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the cources collection.
db.getCollection('Cources').insertMany(
[
  {
    "name": "web development",
    "duration": "1 hour",
    "price": "200"
  },
  {
    "name": "graphic design",
    "duration": "2 hours",
    "price": "500"
  },
  {
    "name": "Flutter development",
    "duration": "3 hours",
    "price": "800"
  },
  {
    "name": "Python programming",
    "duration": "2 hours",
    "price": "400"
  },
  {
    "name": "JavaScript",
    "duration": "1.5 hours",
    "price": "300"
  },
  {
    "name": "UI/UX design",
    "duration": "2 hours",
    "price": "600"
  },
  {
    "name": "Database management",
    "duration": "1 hour",
    "price": "250"
  },
  {
    "name": "Mobile app development",
    "duration": "4 hours",
    "price": "1000"
  },
  {
    "name": "Digital marketing",
    "duration": "2 hours",
    "price": "450"
  },
  {
    "name": "SEO basics",
    "duration": "1.5 hours",
    "price": "350"
  }
]

);


// Print a message to the output window.
console.log(`Sigma playground created.`);

