var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const config = require('./config/index');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
var staffRouter = require('./routes/staff');
var shopRouter = require('./routes/shop');

const errorHandle = require('./middleware/errorHandle');

var app = express();
mongoose.connect(config.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true})

app.use(logger('dev'));
app.use(express.json({ limit:'50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/company', companyRouter);
app.use('/staff',staffRouter)
app.use('/shop',shopRouter)

app.use(errorHandle);
module.exports = app;
