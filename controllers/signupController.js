const mongoose = require("mongoose");
const User = mongoose.model("user");

const addUser = async (req, res) => {
    const new_user = req.body;
    const userName = req.body.username;
    const password = req.body.password;
    try {
        User.exists({ username: userName }, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
            if(!result){
                res.status(200);
                User.create(new_user);
            }else{
                res.status(400);

            }

        });


    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

//module.exports=login;
module.exports = {
    addUser
};