var foo = [];
foo.push(1);
foo.push(2, 3, 4);
console.log(foo); // 1,2,3,4

// pop - miče zadnji član iz polja
var foo = [1, 2, 3, 4];
var bar = foo.pop();
console.log(foo); // 1,2,3
console.log(bar); // 4

// shift - miče prvi član iz polja
var foo = [1, 2, 3, 4];
bar = foo.shift();
console.log(foo); // 2,3,4
console.log(bar); // 1

// unshift - stavlja prvi član u polje
var foo = [1, 2, 3, 4];
foo.unshift(0);
console.log(foo); // 0,1,2,3,4

// splice
var foo = [1, 2, 3, 4];
foo.splice(1, 2);
console.log(foo); // 1,4  (pocinjemo s prvim indeksom i brisemo dvije vrijednosti)

var foo = [1, 2, 3, 4];
foo.splice(0, 1);
console.log(foo); // 2,3,4  (pocinjemo s nultim indeksom i brisemo jednu vrijednost)

var foo = [1, 2, 3, 4];
foo.splice(2, 0, 100);
console.log(foo); // 1,2,100,3,4  (pocinjemo s drugim indeksom i brisemo 0 vrijednosti i dodajemo 100)

var foo = [1, 2, 3, 4];
foo.splice(2, 0, 100, 101, 102);
console.log(foo); // 1,2,100,101,102,3,4  (pocinjemo s drugim indeksom i brisemo 0 vrijednosti i dodajemo vrijednosti)


var foo = [1, 2, 3, 4];
foo.sort(function (x, y) {
    return y - x;
});
console.log(foo); // [4, 3, 2, 1]


// stavlja novu listu na kraj originalne liste
var foo = [1, 2, 3, 4];
foo = foo.concat([5, 6]);
console.log(foo); // 1,2,3,4,5,6



// For each
var bar = [10, 100, 1000, true];

for (var i in bar) {
    console.log(i, bar[i]);
}

// kopiranje liste - shallow copy
var foo = bar.slice();
bar.unshift();
console.log(bar);
console.log(foo);


// Lazy evaluation
var animals = ["ant", "bee", "dog"];
var firstAnimal = animals && animals.length && animals[0];
console.log(firstAnimal); // Jere

// Lazy evaluation is usefull
var animals = ["ant", "bee", "dog"];
var someLaterAnimal = animals && animals.length && animals[5];
console.log(firstAnimal); // Jere

// Lazy evaluation continues
var animals = 123;
var firstAnimal = animals && animals.length && animals[0];
console.log(firstAnimal); // undefined