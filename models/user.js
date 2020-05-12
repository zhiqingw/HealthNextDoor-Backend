const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String
},{versionKey: false});

const user = mongoose.model("user", userSchema, "user");
module.exports = user;
