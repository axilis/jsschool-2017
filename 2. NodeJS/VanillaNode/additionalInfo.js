'use strict';

const info = 'Ovo je additional info';

let counter = 0;

function getInfo() {
	console.log(info);
}

function increaseCounter() {
	counter++;
}

function printCounter() {
	console.log(counter);
}

module.exports = {
	info,
	getInfo,
	increaseCounter,
	printCounter
};
