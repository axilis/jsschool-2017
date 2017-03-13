// globalni prostor okupirat će varijable koje nisu definirane unutar funkcije
// window - browser
// global - nodejs
foo = "hello";  

console.log(foo); // hello
console.log(window.foo); // hello
console.log(this.foo); // hello
console.log(this === window); // true


// global scope primjer #1
foo = "foo";

function bar() {
    foo = "bar";
}

bar();
console.log(foo); // bar

