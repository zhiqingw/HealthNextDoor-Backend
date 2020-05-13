var express = require('express');
var router = express.Router();
//var Signup = require('../controllers/authenticate/login');
const signupController = require("../controllers/signupController.js");
/* GET users listing. */


router.post('/', signupController.addUser);
/* GET users by id. */


/* signup users. */

/*
router.post('/signup', function (req, res, next) {

    const username = req.body.username;
    var signupResult = signup(username, req.body.password);

    if (signupResult) {
        //res.render('users', {username: username});
        res.redirect('/:username');
    } else {
       // res.render('index', {error: true});
    }
});*/

module.exports = router;