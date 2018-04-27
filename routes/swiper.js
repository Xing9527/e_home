var express = require('express');
var router = express.Router();
var swiper = require('../database/model/swiper');

router.post('/add',(req,res) => {
    let {img,title,path,type} = req.body;
    swiper.create({img,title,path,type},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"添加数据失败",
                ret:false
            })
            return
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.get('/get',(req,res) => {
    let {id} = req.query;
    var params = {};
    if(id) {
        params = {_id:id}
    }else{
        params = {}
    }
    swiper.find(params,(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"查找数据失败",
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

router.post('/update',(req,res) => {
    let {id,img,title,path} = req.body;
    swiper.update({id},{$set:{img,title,path}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"修改数据失败",
                ret:false
            })
            return
        }
        if(data.n == 0){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"无效的ID",
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    swiper.remove({_id:id},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"删除数据失败",
                ret:false
            })
            return
        }
        if(data.n == 0){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"无效的ID",
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
})

module.exports = router;