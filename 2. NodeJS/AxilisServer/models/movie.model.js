'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
	title: String,
	rating: Number,
	isWatched: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Movie', movieSchema);
