var express = require('express');
var router = express.Router();
const loginController = require("../controllers/loginController.js");
/* GET users listing. */

router.post('/', loginController.login);



module.exports = router;