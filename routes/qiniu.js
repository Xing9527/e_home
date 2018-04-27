var express = require('express');
var router = express.Router();
var qiniuConfig = require('../util/qiniuConfig');
var token = qiniuConfig();

router.get('/getToken',(req,res) => {
    res.json({
        data:token,
        code:200,
        msg:"success",
        ret:true
    })
})

module.exports = router;