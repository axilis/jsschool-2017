'use strict';

module.exports = function(movie) {
    return {
        id: movie._id,
        rating: movie.rating,
        title: movie.title
    };
};