const mongoose = require("mongoose");

const caregiverSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    gender: String,
    introduction: String,
},{versionKey: false});

const Caregiver = mongoose.model("caregiver", caregiverSchema, "caregiver");
module.exports = Caregiver;
