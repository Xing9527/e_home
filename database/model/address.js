var mongoose = require('mongoose');
var address = new mongoose.Schema({
    x:{
        type:Number
    },
    y:{
        type:Number
    },
    msg:{
        type:String
    }
})

module.exports = mongoose.model("address",address,"address")