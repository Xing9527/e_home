var express = require('express');
var router = express.Router();
var news = require('../database/model/news');
var users = require('../database/model/users');

router.post('/add',(req,res) => {
    let {title,img,content,type} = req.body;
    news.create({title,img,content,type},(err,data) => {
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
            data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})
router.get('/get',(req,res) => { //所有通过ID获取的新闻都调用这个接口
    let {id,type} = req.query;
    if(id){  //如果传ID进来，那么就是获取新闻的详情，只需查找一个数据即可
        news.findOne({_id:id}, (err,data) => {
            if(err){
                res.json({
                    data:err,
                    code:500,
                    msg:"数据查找失败",
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
            
            data.view += 1;     //当数据查找成功时，就将view值加一重写进数据，这样就可以点击新闻页面时自动增加访问量
            news.update({_id:id},{$set:{view:data.view}},(err,data) => {})
        })
    }else{
        news.find({type}, (err,data) => {
            if(err){
                res.json({
                    data:err,
                    code:500,
                    msg:"数据查找失败",
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
    }
})
router.get('/getAll',(req,res) => {
    news.find({},(err,data) => {
        if(err){
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
            msg:"success",
            ret:true
        })
    })
})
router.get('/newsEyes',(req,res) => {  //查看新闻眼
    news.find({type:"信工新闻眼"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/politicaLearn',(req,res) => {  //查看政治学习
    news.find({type:"政治学习"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/madeEasy',(req,res) => {  //查看党建一点通
    news.find({type:"党建一点通"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/showID',(req,res) => {  //查看党员亮身份
    news.find({type:"党员亮身份"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/everywhereStudy',(req,res) => {  //查看随时随地学
    news.find({type:"随时随地学"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/everywherePic',(req,res) => {  //查看随时随地拍
    news.find({type:"随时随地拍"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/system',(req,res) => {  //查看制度建设
    news.find({type:"制度建设"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/specialActivity',(req,res) => {  //查看特色活动
    news.find({type:"特色活动"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.get('/inform',(req,res) => {  //查看通知早知道
    news.find({type:"通知早知道"}, (err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据查找失败",
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
router.post('/update',(req,res) => {
    let {id,title,img,content,type} = req.body;
    news.update({id},{$set:{title,img,content,type,updateTime:new Date()}},(err,data) => {
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
                data,
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    news.remove({_id:id},(err,data) => {
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