import mongoose from "mongoose";

const EmployeesSchema = new mongoose.Schema({
    name : String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
})

export const Employees = mongoose.model("Employees", EmployeesSchema)