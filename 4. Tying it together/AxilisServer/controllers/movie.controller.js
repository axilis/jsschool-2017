'use strict';

const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

const MovieService = require('../services/movie.service');

const MovieViewModel = require('../viewModels/movie.viewModel');

function deleteMovie(req, res) {
	// Movie ID kao path parametar
	const movieId = req.params.movieId;

    MovieService.deleteMovie(movieId)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((_err) => {
            res.sendStatus(_err);
        });
}

function getAll(req, res) {
	Movie.find({})
		.exec((_err, _movies) => {
			if (_err) {
				return res.sendStatus(500);
			}
			res.json(_movies);
		});
}

function getMovie(req, res) {
	// Movie ID kao path parametar
	const movieId = req.params.movieId;

	Movie.findById(movieId)
		.exec((_err, _movie) => {
			if (_err) {
				return res.sendStatus(500);
			}
			res.json(new MovieViewModel(_movie));
		});
}

function saveMovie(req, res, next) {
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
}

function setWatched(req, res) {
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
}

module.exports = {
    deleteMovie,
    getAll,
    getMovie,
    saveMovie,
    setWatched
};