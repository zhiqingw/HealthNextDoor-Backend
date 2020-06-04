var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/', (req, res) => {
    res.clearCookie('refreshtoken', {path: '/refresh_token'});
    return res.send({
        message: 'Logged out',
    })
});

module.exports = router