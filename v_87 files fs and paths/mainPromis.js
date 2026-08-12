import fs from "fs/promises"

let a = await fs.readFile("moiz.txt")
console.log(a.toString());


let b  = await fs.appendFile("moiz.txt"," mkkkkk")
console.log(b);
