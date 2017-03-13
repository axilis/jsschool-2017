// ključna riječ var - definiramo varijablu
// tip podatka se dinamički određuje, ovisno o izrazu na desnoj strani
var foo = 4;
console.log(foo); // 4


var foo = "test" + 'test';
console.log(foo); // testtest


var foo = "test";
foo = 4;
console.log(foo); // 4


// kad varijabla nije postavljena, JS postavlja njezinu vrijednost na "undefined"
var foo;
console.log(foo) // undefined


// kad izostavimo ključnu riječ var, JS će sam kreirati varijablu u globalnom prostoru.
// loša praksa
foo = 4;
console.log(foo); // 4


// Pišete li ES5 JS, uvijek na početku skripte uključite strict mode
'use strict'
foo = 4;
console.log(foo); // greška


var foo = 4;
console.log(typeof foo); // number


var foo = 4.5;
console.log(typeof foo); // number


// Upozorenje: oprezno koristiti typeof. Poznat je po laganju.
// http://bonsaiden.github.io/JavaScript-Garden/#types.typeof
// Razraditi kasnije.
var foo = "hi";
console.log(typeof foo); // string


var foo = true;
console.log(typeof foo); // boolean


// undefined je vrijednost, ali predstavlja i tip podatka u JS-u
// refresh konzole, foo, execute => error
var foo;
console.log(typeof foo); // undefined


// jedan od načina da se definira objekt
var foo = {
    bar: true,
    baz: "baz"
}

console.log(typeof foo); // object


// null predstavlja prazan objekt. dakle tipa object je.
var foo = null;
console.log(foo); // object


// nema fundamentalnog tipa podataka za polja
// polja su objekti
var bar = [1,2,3, true, "test"];
console.log(typeof foo); // object


bar.x = 100;
console.log(bar.x); // 100 - ponaša se kao objekt


function printSomething(){
}
console.log(typeof printSomething); // function
