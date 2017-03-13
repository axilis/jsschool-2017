// one
var foo = "global foo";

function bar() {
    var foo = "function foo";
}

bar();
console.log(foo); // global foo


// one refined
var foo = "global foo";

function bar() {
    var foo = "function foo";
    console.log(foo);
    console.log(window.foo);
}

bar();
console.log(foo); // global foo


// two power
var foo = "global foo";
function bar() {

    var foo = "function foo";

    var innerBar = function () {
        var foo = "inner function foo";
        console.log(foo); // inner function foo
    }

    innerBar();
}

bar(); 
