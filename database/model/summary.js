var mongoose = require('mongoose');
var summary = new mongoose.Schema({
    pingyiID:{
        type:String
    },
    userID:{
        type:String
    },
    userName:{
        type:String
    },
    userImg:{
        type:String
    },
    status:{
        type:Number,
        default:0
    },
    img:{
        type:String
    },
    evaluate:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("summary",summary)