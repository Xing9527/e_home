var mongoose = require('mongoose');
var messages = new mongoose.Schema({
    name:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    message:{
        type:String
    },
    reply:{
        type:Array,
        default:[]
    },
    headerImg:{
        type:String,
    }
})

module.exports = mongoose.model("messages",messages,"messages");