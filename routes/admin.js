var express = require('express');
var router = express.Router();
var admin = require('../database/model/admin');

router.post('/login',(req,res) => {
    let {username,pwd} = req.body;
    admin.findOne({username},(err,data) => {
        // console.log(data)
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
                data:"该用户不存在",
                code:400,
                ret:false
            })
            return
        }else if(data.pwd != pwd){
            res.json({
                data:"密码错误",
                code:400,
                ret:false
            })
            return
        }else{
            req.session.admin = data;
            res.json({
                data:"success",
                code:200,
                ret:true
            })
        }
    })
})

router.get('/isLogin',(req,res) => {
    if(req.session.admin) {
        res.json({
            data:"用户已登录",
            code:200,
            ret:true
        })
        return
    }else{
        res.json({
            data:"用户未登录",
            code:400,
            ret:false
        })
    }
})

router.get('/logout',(req,res) => {
    if(req.session.admin) {
        req.session.admin = null;
        res.json({
            data:"退出登录成功",
            code:200,
            ret:true
        })
        return
    }else{
        res.json({
            data:"用户未登录",
            code:400,
            ret:false
        })
    }
})

module.exports = router;