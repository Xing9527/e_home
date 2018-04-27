var express = require('express');
var router = express.Router();
var messages = require('../database/model/messages');
var users = require('../database/model/users')

router.post('/add',(req,res) => {
    let {message} = req.body;
    let {headerImg,name} = req.session.user;
    messages.create({headerImg,name,message},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"留言添加失败",
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
        users.findOne({_id:req.session.user._id},(err,data) => {
            let {score,scoreDetail} = data;
            score += 1.5;
            var obj = {
              msg:"积极留言",
              add:1.5,
              time:Date.now()
            }
            scoreDetail.unshift(obj);
            users.update({_id:req.session.user._id},{$set:{score,scoreDetail}},(err,data) => {})
          })
    })
})

router.get('/get',(req,res) => {
    let {id} =req.query;
    var params = {};
    if(id) {
        params = {_id:id}
    }else{
        params = {}
    }
    messages.find(params,(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"获取留言失败",
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

router.post('/reply',(req,res) => {
    let {reply,id} = req.body;
    var obj = {
        img:req.session.user.headerImg,
        name:req.session.user.name,
        createTime:Date.now(),
        reply:reply
    }
    // var arr = [];    
    messages.findOne({_id:id},(err,data1) => {
        // console.log(data1)
        data1.reply.push(obj);
        messages.update({_id:id},{$set:{reply:data1.reply}},(err,data) => {
            if(err) {
                res.json({
                    data:err,
                    code:500,
                    msg:"回复失败",
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
                    data,
                    code:200,
                    msg:"success",
                    ret:true
                })
                users.findOne({_id:req.session.user._id},(err,data) => {
                    let {score,scoreDetail} = data;
                    score += 1.5;
                    var obj = {
                      msg:"积极留言",
                      add:1.5,
                      time:Date.now()
                    }
                    scoreDetail.unshift(obj);
                    users.update({_id:req.session.user._id},{$set:{score,scoreDetail}},(err,data) => {})
                })
            }
        })
    })
    
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    messages.remove({_id:id},(err,data) => {
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