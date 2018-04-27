var mongoose = require('mongoose');
var users = new mongoose.Schema({
    headerImg:{  //头像
        type:String,
        default:"http://image.yaojunrong.com/FqvDUr4h0uHl4oBhjWOX0aMm1eJP"
    },
    name:{  //姓名
        type:String
    },
    idNum:{ //身份证号
        type:String
    },
    pwd:{ //密码
        type:String
    },
    pwdAgain:{  //确认密码
        type:String
    },
    party:{  //所在党支部
        type:Number,
        default:5
    },
    score:{   //个人积分
        type:Number,
        default:0
    },
    scoreDetail:{  //个人积分详情
        type:Array,
        default:[]
    },
    sex:{
        type:String,
        default:null
    },
    politicsStatus:{ //政治面貌
        type:String
    }
})

module.exports = mongoose.model("users",users);