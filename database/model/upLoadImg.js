var mongoose = require('mongoose');
var imgs = new mongoose.Schema({
    img:{
        type:String
    },
    type:{
        type:String
    },
    audit:{  //审核，默认为未通过
        type:Boolean,
        default:false
    },
    name:{
        type:String
    },
    idNum:{
        type:String
    }
})

module.exports = mongoose.model("imgs",imgs);