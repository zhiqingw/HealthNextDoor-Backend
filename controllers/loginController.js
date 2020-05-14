const mongoose = require("mongoose");
const User = mongoose.model("user");

const getAllUsers = async (req, res) => {

    try {
        const all_users = await User.find();
        return res.send(all_users);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};




// function to modify author by ID
const updateUser = async (req, res) => {
    const userName = req.params.name;
    const new_user = req.body;


    try {
        const users = await User.find({username: userName});
        if (!users) {
            res.status(400);
            console.log("User not found");
            return res.send("User not found");
        }

        const user = users[0];
        console.log("User found!!!", user);

        user["userName"] = new_user["userName"];
        user["password"] = new_user["password"];


        await user.save();
        res.send(new_user);
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }

};

// function to get author by id
const getUserByName = async (req, res) => {
    const UserName = req.params.name;

    try {
        const users = await User.find({username: UserName});
        if (!users) {
            res.status(400);
            console.log("User not found");
            return res.send("User not found");
        }

        const user = users[0];
        console.log("User found!!!", UserName);


        return res.send(user);
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

const deleteUser = (req, res) => {
    // delete post in the database via ID
    const deleted_userName = req.params.name;
    User.remove({username: deleted_userName}, function(err, obj) {
        if (err) throw err;
    });
    return res.send("deleted");
};

const login = async (req, res) => {

    const userName = req.body.username;
    const password = req.body.password;
    console.log(userName,password);
    try {
        const users = await User.find({username: userName});
        if (!users) {
            res.status(400);
            console.log("User not found");
            return res.redirect(req.url);
        }

        const user = users[0];
        console.log("User found!!!", userName);
        if(user.password===password){
            res.status(200);
            sessionStorage.setItem("username",userName);
            return res.send("match!!");
        }
        else{
            res.status(400);
            return res.send("not match!!")
        }


    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }

};

module.exports=login;
module.exports = {
    getAllUsers,
    updateUser,
    getUserByName,
    deleteUser,
    login
};