var express = require('express');
var router = express.Router();
var getData = require('../util/getData');

router.get('/',(req,res) => {
    getData().then(data => {
        res.json({
            data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

module.exports = router;