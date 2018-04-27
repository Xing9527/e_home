var mongoose = require('mongoose');
var swiper = new mongoose.Schema({
    img:{
        type:String
    },
    title:{
        type:String
    },
    path:{
        type:String
    },
    type:{
        type:String
    }
})

module.exports = mongoose.model("swiper",swiper,"swiper")