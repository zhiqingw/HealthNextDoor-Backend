var express = require('express');
var router = express.Router();
const {isAuth} = require('./isAuth');
/* GET users listing. */
router.post('/', async (req, res) => {
    try{
        const username = isAuth(req)
        if(username !== null){
            res.send({
                data: 'this is protected data.',
            })
        }
    }catch(err){

    }
})

module.exports = router