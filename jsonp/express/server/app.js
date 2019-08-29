var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var url = require("url")
var querystring = require('querystring')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//get请求接口
app.get("/api", (req, res) => {
    const oUrl = url.parse(req.url)
    const { callback } = querystring.parse(oUrl.query)
    const { formatJsonp } = require("./config/index")

    //判断是不是jsonp接口
    if (callback) {
        //设置响应类型 响应状态码
        res.writeHead(200, {
            'Content-Type': 'text/javascript'
        })
        const result = { code: 1, type: 'jsonp' }
        const data = formatJsonp(callback, result)
        res.end(data)
    } else {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        const json = {
            code: 1,
            type: 'json'
        }
        res.end(JSON.stringify(json))
    }
})

//post请求接口
app.post("/postApi", bodyParser.urlencoded({ extended: false }), (req, res) => {
    //允许跨域 匹配*号
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
    res.end(JSON.stringify({
        code: 1,
        type: 'post'
    }))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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