const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e_home');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("数据库连接成功")
});