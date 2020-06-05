const { verify } = require('jsonwebtoken');

var express = require('express');
require('dotenv/config');
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");
const {createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken} = require('../controllers/tokens');
router.post('/', async(req, res) => {
    const token = req.cookies.refreshtoken;
    if(!token) return res.send({accesstoken:''});
    let payload = null;
    try{
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    }catch (err) {
        return res.send({accesstoken:''});
    }
    const all_caregiver = await User.find();
    const user = await User.findOne({username: payload.username});
    if(!user) return res.send({accesstoken: ''});


    const accesstoken = createAccessToken(user.username);
    const refreshtoken = createRefreshToken(user.username);

    user.refreshtoken = refreshtoken;

    sendRefreshToken(res, refreshtoken);
    return res.send({ accesstoken });
})
module.exports = router