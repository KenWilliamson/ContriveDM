var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(lessMiddleware('/less', {
  dest: '/css',
  pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

var errorHander = function (err, req, res, next) {
    console.log(err);
    res.redirect("error.html");
};
app.use(errorHander);
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var port = 3000;
app.listen(port);


