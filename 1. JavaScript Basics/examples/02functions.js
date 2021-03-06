// deklaracija funkcije
function foo() {
    console.log("foo function");
}
foo();


// deklaracija funkcije s argumentom
function foo(bar) {
    console.log("foo function with argument: " + bar);
}
foo("true");


// izvršavanje funkcije prije deklaracije
// hoisting - dva prolaza, prvi pokupio deklaracije, drugi krenuo s izvršavanjem
// iz tog razloga, JS zna za metodu foo za vrijeme poziva foo("true");
foo("true");

function foo(bar) {
    console.log("foo function with argument: " + bar);
}


// Deklaracija funkcije s povratnom vrijednosti
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 10)); // 15


// Izvršavanje funkcije s viškom argumenata
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 10, 100)); // 15, 100 se ignorira


// Izvršavanje funkcije s manjkom argumenata
function sum(x, y) {
    var z = x + y; 
    return z;
}
console.log(sum(5)); // NaN

// Pokazati debugger
typeof(NaN);



// Izvršavanje funkcije bez povratne vrijednosti
function doNothing(x, y) {

}
console.log(doNothing()); // undefined


// spremili smo anonimnu funkciju u varijablu
// Neobično na prvu, ali česta pojava u JS-u
var foo = function () {
    console.log("hi from anonymous");
}

foo();

// foo.name
