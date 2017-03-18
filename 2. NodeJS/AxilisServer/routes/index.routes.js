'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/list', (req, res, next) => {
	Movie.find({}).exec((_err, _movies) => {
		if (_err) {
			return res.sendStatus(500);
		}
		res.render('list', {
			movies: _movies
		});
	});

});

module.exports = router;
