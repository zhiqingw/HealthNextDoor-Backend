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
    const action = new_user["action"];

    try {
        const user = await User.findOne({username: userName});
        if (!user) {
            res.status(400);
            console.log("User not found");
            return res.send("User not found");
        }
        if(action){
            const status = action[0];
            const target = action[1];
            if(status==="accept"){
                if(user["sentReq"].includes(target)){
                    const index = user["sentReq"].indexOf(target);
                    user["sentReq"].splice(index, 1);
                    user["orderList"].push(target);
                }
                else if(user["receiveReq"].includes(target)){
                    const index = user["receiveReq"].indexOf(target);
                    user["receiveReq"].splice(index, 1);
                    user["orderList"].push(target);
                }
            }
            else if(status==="decline"){
                if(user["sentReq"].includes(target)){
                    const index = user["sentReq"].indexOf(target);
                    user["sentReq"].splice(index, 1);
                }
                else if(user["receiveReq"].includes(target)){
                    const index = user["receiveReq"].indexOf(target);
                    user["receiveReq"].splice(index, 1);
                }
            }
            else if(status==="complete"){
                if(user["orderList"].includes(target)){
                    const index = user["sentReq"].indexOf(target);
                    user["orderList"].splice(index, 1);
                    user["orderHistory"].push(target);
                }
            }
        }
        console.log("User found!!!", user);
        if(new_user["userName"]){
            user["userName"] = new_user["userName"];
        }
        if(new_user["password"]){
            user["password"] = new_user["password"];
        }
        if(new_user["sentReq"]){
            user["sentReq"] = new_user["sentReq"];
        }
        if(new_user["receiveReq"]){
            user["receiveReq"] = new_user["receiveReq"];
        }
        if(new_user["orderList"]){
            user["orderList"] = new_user["orderList"];
        }
        if(new_user["orderHistory"]){
            user["orderHistory"] = new_user["orderHistory"];
        }
        await user.save();
        res.send(user);
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
        const user = await User.findOne({username: UserName});
        if (!user) {
            res.status(400);
            console.log("User not found");
            return res.send("User not found");
        }

        console.log("User found!!!", user);


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
/*check if username correct*/
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