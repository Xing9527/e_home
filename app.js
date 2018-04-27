var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongooseConfig = require('./database/config');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var qiniu = require('./routes/qiniu');
var news = require('./routes/news');
var swiper = require('./routes/swiper');
var imgs = require('./routes/imgs');
var address = require('./routes/address');
var messages = require('./routes/messages');
var partyToday = require('./routes/partyToday');
var admin = require('./routes/admin');
var pingyi = require('./routes/pingyi');
var summary = require('./routes/summary');
var client = require('./routes/client');
var server = require('./routes/server');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'xing',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.use('/', client);
app.use('/api/users', users);
app.use('/api/qiniu', qiniu);
app.use('/api/news', news);
app.use('/api/swiper', swiper);
app.use('/api/imgs', imgs);
app.use('/api/address', address);
app.use('/api/messages', messages);
app.use('/api/partyToday', partyToday);
app.use('/api/admin', admin);
app.use('/api/pingyi', pingyi);
app.use('/api/summary', summary);
app.use('/admin',server);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
