console.log(typeof this); // objekt u globalnom prostoru

console.log(this === window); // true



// this u funkciji
var log = function () {
    console.log(this === window);
}
log(); // true. kao da pise window.log(), a this poprima vrijednost objekta nad kojim se zove


// **********************************************
var student = {
    name: "Pero",
    speak: function () {
        console.log(this.name + " speaks");
    }
}

student.speak(); // this === objekt nad kojim se zove === student

// **********************************************

var student = {
    name: "Pero",
    speak: function () {
        console.log(this.name + " speaks");
    }
}

var studentSpeak = student.speak;
studentSpeak();



// Exercise: Popraviti ovo da radi. Ostaviti innerFunction.
var student = {
    name: "Pero",
    speak: function () {
        // this === student

        var innerFunction = function () {
            // this === window
            console.log(this);
        }
    }
}

student.speak(); // Window{...}





// this u funkciji
var log = function () {
    console.log(this);
}
log.call(new Number(5)); // Number {[[PrimitiveValue]]: 5}
// Call metoda nad funkcijom omogućuje nam da postavimo vrijednost this-a unutar funkcije



// this u funkciji
var log = function (foo, bar) {
    console.log(this);
}
log.call({}, "foo", "bar");
log.apply({}, ["foo", "bar"]);

// showcase return values.
