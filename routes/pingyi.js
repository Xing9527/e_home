var express = require('express');
var router = express.Router();
var pingyi = require('../database/model/pingyi');

router.post('/add',(req,res) => {
    let {title,content,contentTxt} = req.body;
    pingyi.create({title,content,contentTxt},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return 
        }
        res.json({
            data:"success",
            code:200,
            ret:true
        })
    })
})

router.get('/get',(req,res) => {
    let {id} = req.query;
    let params = {};
    if(id) {
        params = {_id:id};
    }else{
        params = {}
    }
    pingyi.find(params,(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        res.json({
            data,
            code:200,
            ret:true
        })
    })
})

router.get('/openOne',(req,res) => {  //获取开启的那个评议数据
    pingyi.findOne({status:1},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        res.json({
            data,
            code:200,
            ret:true
        })
    })
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    pingyi.remove({_id:id},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })
})

router.post('/update',(req,res) => {
    let {id,title,content,contentTxt} = req.body;
    pingyi.update({_id:id},{$set:{title,content,contentTxt}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })
})

router.post('/open',(req,res) => {
    let {id} = req.body;
    pingyi.findOne({status:1},(err,data) => {
        if(data) {
            res.json({
                data:"已有一个项目开启",
                code:400,
                ret:false
            })
            return
        }else{
            pingyi.update({_id:id},{$set:{status:1}},(err,data) => {
                if(err) {
                    res.json({
                        data:err,
                        code:500,
                        ret:false
                    })
                    return
                }
                if(!data.n){
                    res.json({
                        data:"无效的ID",
                        code:400,
                        ret:false
                    })
                    return
                }else{
                    res.json({
                        data:"success",
                        code:200,
                        ret:true
                    })
                }
            })
        }
    })
})

router.post('/close',(req,res) => {
    let {id} = req.body;
    pingyi.update({_id:id},{$set:{status:0}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })
})

module.exports = router;