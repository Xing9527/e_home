var express = require('express');
var router = express.Router();
var summary = require('../database/model/summary');

router.post('/add',(req,res) => {   //上传个人总结
    let {pingyiID,img} = req.body;
    let userID = req.session.user._id;
    let userName = req.session.user.name;
    let userImg = req.session.user.headerImg;
    summary.findOne({pingyiID,userID},(err,data) => {
        if(data){
            res.json({
                data:"不能重复上传",
                code:400,
                ret:false
            })
            return
        }else{
            summary.create({pingyiID,userID,img,userName,userImg},(err,data) => {
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
        }
    })
})

router.get('/get',(req,res) => {   //后台获取数据
    let {id,pingyiID} = req.query;
    let params = {};
    if(id) {
        params = {_id:id};
    }else{
        params = {pingyiID}
    }
    summary.find(params,(err,data) => {
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

router.get('/getOne',(req,res) => {   //前台获取
    let {pingyiID,userID} = req.query;
    summary.findOne({pingyiID,userID,status:1},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                ret:false
            })
            return
        }
        if(!data) {
            res.json({
                data:"该用户还未上传个人总结",
                code:201,
                ret:false
            })
            return
        }else{
            for(var i=0;i<data.evaluate.length;i++) {
                if(data.evaluate[i].userID == req.session.user._id) {
                    res.json({
                        data:"该用户已经评论过了",
                        code:202,
                        ret:false
                    })
                    return
                }
            }
            res.json({
                data,
                code:200,
                ret:true
            }) 
        }
    })
})

router.post('/pass',(req,res) => {   //通过审核
    let {id} = req.body;
    summary.update({_id:id},{$set:{status:1}},(err,data) => {
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

router.post('/del',(req,res) => {  //删除，没通过审核
    let {id} = req.body;
    summary.remove({_id:id},(err,data) => {
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

router.post('/evaluate',(req,res) => { //评价
    let {evaluate,id} = req.body;
    let {_id,name,headerImg} = req.session.user;
    var obj = {
        userID:_id,
        name:name,
        headerImg,
        evaluate
    }
    summary.findOne({_id:id},(err,docs) => {
        docs.evaluate.push(obj)
        summary.update({_id:id},{$set:{evaluate:docs.evaluate}},(err,data) => {
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

})

module.exports = router;