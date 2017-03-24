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

router.post('/:movieId/setWatched', (req, res) => {
	// Movie ID kao path parametar
	const movieId = req.params.movieId;
	// Flag za oznacavanje pogledanosti filma se proslijeduje kao body parametar
	const isWatched = req.body.isWatched;

	Movie.findById(movieId)
		.exec((_err, _movie) => {
			if (_err) {
				return res.sendStatus(500);
			}
			if (!_movie) {
				return res.sendStatus(404);
			}
			_movie.isWatched = isWatched;
			_movie.save((_err) => {
				if (_err) {
					return res.sendStatus(500);
				}
				res.json(_movie);
			});
		});
});

router.delete('/:movieId', (req, res) => {
	// Movie ID kao path parametar
	const movieId = req.params.movieId;
	Movie.findById(movieId)
		.remove()
		.exec((_err, _result) => {
			if (_err) {
				// Error ce biti vracen ako ID nije u dobrom formatu (24 znaka) - necemo zaobilaziti za sada
				return res.sendStatus(500);
			}
			// Mongoose nakon delete akcije omogucava citanje koliko je elemenata izbrisano
			// Ako je 0 (_result.result.n), imati ce falsy vrijednost te ce vratiti
			// 404 jer ocigledno nije pronaden takav zapis u bazi
			if (!_result.result.n) {
				return res.sendStatus(404);
			}
			res.sendStatus(200);
		});
});

router.get('/all', (req, res) => {
	Movie.find({})
		.exec((_err, _movies) => {
			if (_err) {
				return res.sendStatus(500);
			}
			res.json(_movies);
		});
});

router.get('/:movieId', (req, res) => {
	// Movie ID kao path parametar
	const movieId = req.params.movieId;

	Movie.findById(movieId)
		.exec((_err, _movie) => {
			if (_err) {
				return res.sendStatus(500);
			}
			res.json(_movie);
		});
});



module.exports = router;
