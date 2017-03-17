'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/list', (req, res, next) => {
	res.render('list', {
		title: 'Express'
	});
});

module.exports = router;
