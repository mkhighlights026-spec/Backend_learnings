const { error } = require("console");
const fs  = require("fs")

console.log("Starting");
fs.writeFile("moiz.txt", "Hay this my backend learnings", ()=>{
    console.log('done');
    fs.readFile("moiz.txt", (error, data)=>{
        console.log(error, data.toString());
        
    })
    
})



fs.appendFile("moiz.txt", " Moiz khan", (e,d)=>{
    console.log(d);
    
})
console.log("Ending");

