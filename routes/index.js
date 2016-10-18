var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

function hola1(arg){
	document.write(arg);
}

module.exports = router;
