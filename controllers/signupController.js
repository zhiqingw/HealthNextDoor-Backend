const mongoose = require("mongoose");
const User = mongoose.model("user");

const addUser = async (req, res) => {
    const new_user = req.body;
    User.create(new_user);
    res.send("done");
};

//module.exports=login;
module.exports = {
    addUser
};