var express = require('express');
var router = express.Router();
var address = require('../database/model/address');

router.post('/add',(req,res) => {
    let {x,y,msg} = req.body;
    address.create({x,y,msg},(err,data) => {
        res.json({
            data
        })
    })
})
router.get('/get',(req,res) => {
    address.find({},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"false",
                ret:false
            })
            return
        }
        res.json({
            data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.post('/del',(req,res) => {
    let {id} = req.query;
    address.remove({_id:id},(err,data) => {
        res.json({
            data
        })
    })
})

module.exports = router;