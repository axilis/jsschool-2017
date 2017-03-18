'use strict';

const testFolder = './';
const fs = require('fs');

const q = require('q');

function getFilenames() {
	let deferred = q.defer();
	fs.readdir(testFolder, (err, files) => {
		if (err) {
			deferred.reject('Ajoj');
		} else {
			deferred.resolve(files);
		}
	});
	return deferred.promise;
}

getFilenames()
	.then((files) => {
		console.log('Prvi prolaz', files);
		return getFilenames();
	})
	.then((files) => (console.log('Drugi prolaz', files)))
	.catch((err) => (console.log(err)));
