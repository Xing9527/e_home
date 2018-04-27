var mongoose = require('mongoose');
var pingyi = new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    contentTxt:{
        type:String 
    },
    status:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("pingyi",pingyi);