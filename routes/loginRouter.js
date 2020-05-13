var express = require('express');
var router = express.Router();
const loginController = require("../controllers/loginController.js");
/* GET users listing. */
router.get('/', loginController.getAllUsers);

router.post('/', loginController.login);
router.post('/:name', loginController.updateUser);
/* GET users by id. */
router.get('/:name', loginController.getUserByName);

/* login users. */

/*
router.post('/login', function (req, res, next) {

    const username = req.body.username;
    var loginResult = login(username, req.body.password);

    if (loginResult) {
        //res.render('users', {username: username});
        res.redirect('/:username');
    } else {
       // res.render('index', {error: true});
    }
});*/

module.exports = router;