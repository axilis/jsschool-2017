'use strict';

const Q = require('q');

function deleteMovie(movieId) {
    let deferred = Q.defer();

	Movie.findById(movieId)
		.remove()
		.exec((_err, _result) => {
			if (_err) {
				// Error ce biti vracen ako ID nije u dobrom formatu (24 znaka) - necemo zaobilaziti za sada
				return deferred.reject(500);
			}
			// Mongoose nakon delete akcije omogucava citanje koliko je elemenata izbrisano
			// Ako je 0 (_result.result.n), imati ce falsy vrijednost te ce vratiti
			// 404 jer ocigledno nije pronaden takav zapis u bazi
			if (!_result.result.n) {
				return deferred.reject(404);
			}
			deferred.resolve(200);
		});
    return deferred.promise;
}

module.exports = {
    deleteMovie
};