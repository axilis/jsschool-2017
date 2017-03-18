var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'AxilisJSSchool',
		naslov: 'Naslov',
		lista: ['jedan', 'dva', 'tri']
	});
});

module.exports = router;
