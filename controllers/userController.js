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
            else if (status === "send"){
                if((!user["orderList"].includes(target))
                    && (!user["receiveReq"].includes(target)) && (!user["sentReq"].includes(target))){
                    const received_user = await User.findOne({username: target});
                    if(!received_user){
                        return res.send("User you want to add is not found");
                    }
                    user["sentReq"].push(target);
                    received_user["receiveReq"].push(user["username"]);
                    await received_user.save();
                }
            }
        }
        console.log("User found!!!", user);
        if(new_user["username"]){
            user["username"] = new_user["username"];
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

module.exports = {
    getAllUsers,
    updateUser,
    getUserByName,
    deleteUser
};