var express = require('express');
var router = express.Router();
var users = require('../database/model/users');

/* GET users listing. */
router.post('/register',(req,res) => {   //注册用户
  let {name,idNum,pwd,pwdAgain,party,sex,politicsStatus} = req.body;
  users.findOne({idNum},(err,data) => {
    if(data){ //说明身份证号已经被注册
      res.json({
        data:"该用户已被注册",
        code:400,
        msg:"该用户已被注册",
        ret:false
      })
      return
    }else if(pwd != pwdAgain) { //两次输入的密码不一样
      res.json({
        data:"两次输入的密码不同",
        code:400,
        msg:"两次输入的密码不同",
        ret:false
      })
      return
    }else{ //可以注册
      users.create({name,idNum,pwd,party,politicsStatus,sex},(err,data) => {
        if(err) {
          res.json({
            data:err,
            code:500,
            msg:"用户注册失败",
            ret:false
          })
          return
        }
        res.json({
          data:"success",
          code:200,
          msg:"success",
          ret:true
        })
      })
    }
  })
});

router.get('/get',(req,res) => { //查找用户信息
  let {id} = req.query;  
  var params = {};
  if(id) {
    params = {_id:id}
  }else{
    params = {}
  }
  users.find(params,(err,data) => {
    if(err) {
      res.json({
        data:err,
        code:500,
        msg:"查找用户失败",
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

router.post('/del',(req,res) => {
  let {id} = req.body;
  users.remove({_id:id},(err,data) => {
    if(err){
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

router.get('/information',(req,res) => {   //获取登录用户的信息
  let {_id} = req.session.user;
  users.findOne({_id},(err,data) => {
    if(err) {
      res.json({
        data:err,
        code:500,
        msg:"获取用户信息失败",
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

router.get('/getScore',(req,res) => {  //获取个人积分总数
  users.findOne({_id:req.session.user._id},(err,data) => {
    if(err) {
      res.json({
        data:err,
        code:500,
        msg:"获取失败",
        ret:false
      })
      return
    }
    res.json({
      data:req.session.user.score,
      code:200,
      msg:"获取成功",
      ret:true
    })
    users.findOne({_id:req.session.user._id},(err,data) => {
      let {score,scoreDetail} = data;
      score += 1;
      var obj = {
        msg:"查看积分",
        add:1,
        time:Date.now()
      }
      scoreDetail.unshift(obj);
      users.update({_id:req.session.user._id},{$set:{score,scoreDetail}},(err,data) => {})
    })
  })
})

router.get('/getMember',(req,res) => { //获取参评党员
  let {party} = req.query;
  users.find({party},(err,data) => {
    if(err) {
      res.json({
        data:err,
        code:500,
        msg:"查找失败",
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

router.get('/getScoreDetail',(req,res) => {   //获取积分详情
  users.findOne({_id:req.session.user},(err,data) => {
    if(err) {
      res.json({
        data:err,
        code:500,
        msg:"获取失败",
        ret:false
      })
      return
    }
    res.json({
      data:data.scoreDetail,
      code:200,
      msg:"获取成功",
      ret:true
    })
  })
})

router.post('/update',(req,res) => {
  let {headerImg,name,sex,politicsStatus} = req.body;
  users.update({_id:req.session.user._id},{$set:{headerImg,name,sex,politicsStatus}},(err,data) => {
      if(err) {
        res.json({
          data:err,
          code:500,
          msg:"修改个人信息失败",
          ret:false
        })
        return
      }
      res.json({
        data:"success",
        code:200,
        msg:"success",
        ret:true
      })
      users.findOne({_id:req.session.user._id},(err,data) => {
        let {score,scoreDetail} = data;
        score += 2;
        var obj = {
          msg:"完善个人信息",
          add:2,
          time:Date.now()
        }
        scoreDetail.unshift(obj);
        users.update({_id:req.session.user._id},{$set:{score,scoreDetail}},(err,data) => {})
      })
      
    })
})

router.post('/login',(req,res) => {
  let {idNum,pwd} = req.body;
  users.findOne({idNum},(err,data) => {
    if(!data) { //说明没注册
      res.json({
        data:"用户未注册",
        code:400,
        msg:"用户未注册",
        ret:false
      })
      return
    }else if(pwd != data.pwd){
      res.json({
        data:"密码错误",
        code:400,
        msg:"密码错误",
        ret:false
      })
      return
    }else{ //可以登录
      req.session.user = data;
      res.json({
        data:"success",
        code:200,
        msg:"success",
        ret:true
      })
      users.findOne({_id:req.session.user._id},(err,data) => {
        let {score,scoreDetail} = data;
        score += 3;
        var obj = {
          msg:"登录",
          add:3,
          time:Date.now()
        }
        scoreDetail.unshift(obj);
        users.update({_id:req.session.user._id},{$set:{score,scoreDetail}},(err,data) => {})
      })
    }
  }) 
})

router.get('/isLogin',(req,res) => {
  if(req.session.user) {
    res.json({
      data:{username:req.session.user.name,img:req.session.user.headerImg},
      code:200,
      msg:"用户已登录",
      ret:true
    })
    return
  }else{
    res.json({
      data:"用户未登录",
      code:400,
      msg:"用户未登录",
      ret:false
    })
  }
})

router.get('/logout',(req,res) => {
  if(req.session.user){
    req.session.user = null;
    res.json({
      data:"退出登录成功",
      code:200,
      msg:"退出登录成功",
      ret:true
    })
    return
  }else{
    res.json({
      data:"用户未登录",
      code:400,
      msg:"用户未登录",
      ret:false
    })
  }
})

router.post('/changePwd',(req,res) => {
  let {oldPwd,newPwd,newPwdAgain} = req.body;
  if(oldPwd != req.session.user.pwd) {
    res.json({
      data:"旧密码输入错误",
      code:401,
      msg:"旧密码输入错误",
      ret:false
    })
    return
  }else if(oldPwd == newPwd) {
    res.json({
      data:"新密码与旧密码相同",
      code:402,
      msg:"新旧密码相同",
      ret:false
    })
    return
  }else if(newPwd != newPwdAgain) {
    res.json({
      data:"两次输入的新密码不同",
      code:403,
      msg:"false",
      ret:false
    })
    return
  }else{ // 可以修改
    users.update({idNum:req.session.user.idNum},{$set:{pwd:newPwd}},(err,data) => {
      if(err) {
        res.json({
          data:err,
          code:500,
          msg:"修改密码失败",
          ret:false
        })
        return
      }
      req.session.user == null;
      res.json({
        data:"success",
        code:200,
        msg:"success",
        ret:true
      })
    })
  }
})

module.exports = router;
