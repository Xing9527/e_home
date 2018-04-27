var express = require('express');
var router = express.Router();
var imgs = require('../database/model/upLoadImg'); //思想汇报和心得总结

router.post('/uploadSi',(req,res) => {   //上传思想汇报等图片
    let {img} = req.body;
    let {name,idNum} = req.session.user;
    imgs.create({img,type:"思想汇报",name,idNum},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"上传失败",
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

router.post('/uploadXin',(req,res) => {   //上传心得总结等图片
    let {img} = req.body;
    let {name,idNum} = req.session.user;
    imgs.create({img,type:"心得总结",name,idNum},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"上传失败",
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
        params = {_id:id}   //检查审核状态时获取信息
    }else{
        params = {}
    }
    imgs.find(params,(err,data) => {
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
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.get('/sixianghuibao',(req,res) => {   
    imgs.find({type:"思想汇报"},(err,data) => {
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
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.get('/xindezongjie',(req,res) => {   
    imgs.find({type:"心得总结"},(err,data) => {
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
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.get('/gerenzongjie',(req,res) => {   
    imgs.find({type:"个人总结"},(err,data) => {
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
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.post('/pass',(req,res) => {  //审核通过 既修改数据的audit值改为true
    let {id} = req.body;
    imgs.update({_id:id},{$set:{audit:true}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"通过审核失败",
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

router.post('/del',(req,res) => {  //审核未通过 既删除数据
    let {id} = req.body;
    imgs.remove({_id:id},(err,data) => {
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

router.get('/isPass',(req,res) => {
    let {id} = req.query;
    imgs.findOne({_id:id},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(data.audit){
            res.json({
                data:"已经通过",
                code:200,
                ret:true
            })
        }else{
            res.json({
                data:"未通过",
                code:201,
                ret:false
            })
        }
    })
})

module.exports = router;