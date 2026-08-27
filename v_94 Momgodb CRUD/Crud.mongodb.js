use("CRUDdb")


db.createCollection("cources")


//write opration

// db.cources.insertOne({
//     name : "moiz kHan",
//     price: "0",
//     duration: "1 months"
// })

// db.cources.insertMany(
// [
//   {
//     "name": "web development",
//     "duration": "1 hour",
//     "price": "200"
//   },
//   {
//     "name": "graphic design",
//     "duration": "2 hours",
//     "price": "500"
//   },
//   {
//     "name": "Flutter development",
//     "duration": "3 hours",
//     "price": "800"
//   },
//   {
//     "name": "Python programming",
//     "duration": "2 hours",
//     "price": "400"
//   },
//   {
//     "name": "JavaScript",
//     "duration": "1.5 hours",
//     "price": "300"
//   },
//   {
//     "name": "UI/UX design",
//     "duration": "2 hours",
//     "price": "600"
//   },
//   {
//     "name": "Database management",
//     "duration": "1 hour",
//     "price": "250"
//   },
//   {
//     "name": "Mobile app development",
//     "duration": "4 hours",
//     "price": "1000"
//   },
//   {
//     "name": "Digital marketing",
//     "duration": "2 hours",
//     "price": "450"
//   },
//   {
//     "name": "SEO basics",
//     "duration": "1.5 hours",
//     "price": "350"
//   }
// ]

// )


// //Read opration
// let a = db.cources.find({duration:"4 hours"})
// console.log(a.toArray());




//update opration
let b = db.cources.update({price:"200"}, {$set:{price:"10000"}})
console.log(b);
let c = db.cources.updateMany({price:"200"}, {$set:{price:"10000"}})
console.log(c);


//delete opration
db.cources.deleteMany({name:"moiz kHan"})