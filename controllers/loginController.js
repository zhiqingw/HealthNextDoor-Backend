const mongoose = require("mongoose");
require('dotenv/config');
const User = mongoose.model("user");
const {createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken} = require('./tokens');
var passwordHash = require('password-hash');
/*check if username correct*/
const login = async (req, res) => {

    const userName = req.body.username;
    const password = req.body.password;
    console.log(userName,password);
    try {
        const user = await User.findOne({username: userName});
        if (!user) {
            res.status(400);
            console.log("User not found");
            return res.send("not found");
        }

        console.log("User found!!!", userName);
        if(passwordHash.verify(password, user["password"])){
            const accessToken = createAccessToken(userName);
            const refreshtoken = createRefreshToken(userName);
            user.refreshtoken = refreshtoken;
            sendRefreshToken(res, refreshtoken);
            sendAccessToken(res, req, accessToken);

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



module.exports = {
    login
};