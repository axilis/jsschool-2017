'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
	title: String,
	rating: Number
});

module.exports = mongoose.model('Movie', movieSchema);
