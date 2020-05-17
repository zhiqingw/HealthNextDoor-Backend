const mongoose = require("mongoose");

const caregiverSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    introduction: String,
    username: String,
    age:String,
    address:String,
    salary:String,
    working_experience:String,
},{versionKey: false});

const Caregiver = mongoose.model("caregiver", caregiverSchema, "caregiver");
module.exports = Caregiver;
