const mongoose = require("mongoose");
const User = mongoose.model("user");

const addUser = async (req, res) => {
    const new_user = req.body;
    const userName = req.body.username;
    try {

        /*check if username already exist*/
        const users = await User.findOne({username: userName});

        if (!users) {
            res.status(200);
            console.log("User not found");
            User.create(new_user);
            return res.send("User created");
        }
        else{
            res.status(400);
            return res.send("user existed");
        }


    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

module.exports = {
    addUser
};