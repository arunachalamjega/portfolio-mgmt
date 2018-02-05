var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var request = require("request");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/register', express.static(path.join(__dirname, 'dist')));



app.get('/hello' , function(reg,res){
 console.log("hello"); 
 res.send('Express RESTful API');
})

app.post('/api/register', function(req, res) {  
  res.setHeader('Content-Type', 'application/json');
  console.log("Register User success:"+JSON.stringify(req.body));  
  url = "https://portfolio.app.dev.digifabricpcf.com/user/sign-up";
  request.post(url,JSON.stringify(req.body), function callback(err,response,body){
    if(err)
    console.log("Errored out");
    console.log(response.body);
  }
)
});


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