var express = require('express');
var router = express.Router();
const loginController = require("../controllers/loginController.js");
/* GET users listing. */
router.get('/', loginController.getAllUsers);

router.post('/', loginController.login);

router.post('/:name', loginController.updateUser);
/* GET users by username. */
router.get('/:name', loginController.getUserByName);

module.exports = router;