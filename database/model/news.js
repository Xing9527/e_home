var mongoose = require('mongoose');
var news = new mongoose.Schema({
    title:{
        type:String
    },
    img:{
        type:String
    },
    content:{
        type:String
    },
    contentText:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    updateTime:{
        type:Date,
        default:Date.now()
    },
    view:{
        type:Number,
        default:0
    },
    type:{
        type:String
    }
})

module.exports = mongoose.model('news',news);