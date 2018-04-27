var mongoose = require('mongoose');
var admin = new mongoose.Schema({
    username:{
        type:String
    },
    pwd:{
        type:String
    }
})

module.exports = mongoose.model("admin",admin,"admin");