import mongoose from "mongoose";
import express from "express"
import path from "path"

import { Employees } from "./modules/Employees.js";

const app = express();
app.set('view engine', 'ejs');


let conn = await mongoose.connect("mongodb://localhost:27017/Company")
const port = 3000;

app.get('/', async (req, res) => {
    res.send('Hello World!');
});


app.get('/genrate', async (req, res) => {
    const emp = await Employees.deleteMany({})

    for (let index = 0; index < 10; index++) {
        const emp = new Employees({ name: getRandomName(), salary: getRandomSalary(), language: getRandomLang(), city: getRandomCity(), isManager: getIsManager() })
        await emp.save()
        console.log(emp);
        
    }
    // res.send("mk");
    res.render("index");

});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});







function getRandomName() {
    const names = ["Moiz", "Ali", "Afaq", "John", "Sarah"];
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * names.length);
    // Return the chosen name
    return names[randomIndex];
}

function getRandomSalary() {
    const salary = [1000, 34550, 45900, 85022, 9000,];
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * salary.length);
    // Return the chosen name
    return salary[randomIndex];
}

function getRandomCity() {
    const city = ["peshawer", "islamabad", "lahore", "charsadda", "mardan"];
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * city.length);
    // Return the chosen name
    return city[randomIndex];
}

function getRandomLang() {
    const lang = ["English", "Urdu", "Pashto", "Frsncy", "turky"];
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * lang.length);
    // Return the chosen name
    return lang[randomIndex];
}

function getIsManager() {
    const isManager = [true, false];
    // Generate a random index between 0 and 1
    const randomIndex = Math.floor(Math.random() * isManager.length);
    // Return the chosen name
    return isManager[randomIndex];
}