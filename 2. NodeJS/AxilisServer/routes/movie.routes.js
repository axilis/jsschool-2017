'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

router.post('/save', (req, res, next) => {
	// req.query
	// req.params
	let movie = new Movie(req.body);

	// alternativa:
	// let movie = new Movie();
	// movie.title = req.body.title;
	// movie.rating = req.body.rating;

	movie.save((_err) => {
		if (_err) {
			return res.sendStatus(500);
		}
		res.redirect('/list');
	});
});

module.exports = router;
