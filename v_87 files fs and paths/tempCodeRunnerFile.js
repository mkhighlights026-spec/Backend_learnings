const { error } = require("console");
const fs  = require("fs")

console.log("Starting");
fs.writeFile("moiz.txt", "Hay this my backend learnings", (error,data)=>{
    console.log(error, data.tostring());
    
})
console.log("Ending");

