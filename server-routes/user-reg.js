var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/user', function(req, res, next) {
    console.log(req);
  res.send('Express RESTful API');
});
router.get('/hello', function(req, res, next) {
    console.log("hello");  
});

module.exports = router;