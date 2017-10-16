'use strict';

const testFolder = './ant';
const fs = require('fs');

// const q = require('q');

function getFilenames() {
	return new Promise((resolve, reject) => {
		fs.readdir(testFolder, (err, files) => {
			if (err) return reject('Ajoj');
			
			return resolve(files);
		});
	});
}

getFilenames()
	.then(files => {
		console.log('Prvi prolaz', files);
		return getFilenames();
	})
	.then(files => (console.log('Drugi prolaz', files)))
	.catch(err => (console.log(err)));
