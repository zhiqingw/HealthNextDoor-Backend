const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    gender: String,
    introduction: String,
},{versionKey: false});

const Patient = mongoose.model("Patient", patientSchema, "Patient");
module.exports = Patient;
