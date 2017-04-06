'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

router.post('/login', (req, res) => {

	if (req.body['password'] === "tajna") {
		res.cookie('login', 'true');
		return res.json({
			status: "ok"
		});
	} else {
		res.status(401);
		return res.json({
			status: "nije ok"
		});
	}
	
});

router.get('/list', (req, res) => {
	// Dio imena filma kao query parametar
	const filter = req.query.filter || '';

	Movie.find({
			title: {
				$regex: filter,
				$options: 'i'
			}
		})
		.exec((_err, _movies) => {
			if (_err) {
				return res.sendStatus(500);
			}
			res.render('list', {
				movies: _movies
			});
		});

});

module.exports = router;
