require('dotenv/config');
const { sign } = require('jsonwebtoken');

const createAccessToken = username => {
    return sign({username}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m',
    })
};

const createRefreshToken = username => {
    return sign({username}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d',
    })
};

const sendAccessToken = (res, req, accesstoken) =>{
    res.send({
        accesstoken,
        username: req.body.username,
    })
}

const sendRefreshToken = (res, refreshtoken) =>{
    res.cookie('refreshtoken', refreshtoken,{
        httpOnly: true,
        path: '/refresh_token',
    })
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
}